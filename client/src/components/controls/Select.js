import {
  FormControl,
  InputLabel,
  MenuItem,
  Menu,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";

export default function Select(props) {
  const { name, label, value, onChange, option } = props;

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect name={name} label={label} value={value} onChange={onChange}>
        <Menu value="">None</Menu>
        {option.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
