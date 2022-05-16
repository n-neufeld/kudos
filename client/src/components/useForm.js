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

// <====================> FORM FUNCTION <====================>
export function Form(props) {
  return (
    <form autoComplete="off">
      {props.children}  
    </form>
  )
}

