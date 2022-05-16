import React, { useState } from "react";

export function useForm(initialFValues) {
  // <====================> SET STATE <====================>
  const [values, setValues] = useState({ initialFValues });

  // <====================> INPUT CHANGE HANDLER <====================>
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
}

export function Form(props) {
  return (
    <form>
      {props.children}  
    </form>
  )
}

