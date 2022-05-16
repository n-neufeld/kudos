import { TextField } from "@mui/material";
import React from "react";

export default function Input(props) {
  const { name, label, placeholder, value, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      placeholder={placeholder}
      name="Full Name"
      value={value}
      onChange={onChange}
    />
  );
}
