import { Paper, TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { API_URL } from "../App";
import React, { useState } from "react";

export default function CommentForm() {
  // <====================> SELLECT RECIPIENT <====================>
  const [selectedUser, setSelectedUser] = useState({});
  const [textValue, setTextValue] = React.useState("");

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSubmit = (event) => {
    //Make a network call somewhere
    event.preventDefault();
    axios({
      method: "post",
      url: `${API_URL}/kudos/create`,
      data: {
        kudo: textValue,
        recipient: selectedUser,
      },
    });
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          my: 2,
          borderRadius: "1rem",
          borderTopRightRadius: "0",
          boxShadow: "2px -5px 10px #ccc, -20px -20px 100px #fff",
          borderRight: "1px solid #ccc",
          borderTop: "1px solid #ccc",
          backgroundColor: "white",
        }}
      >
        {/* <==========> SAY SOMETHING NICE <==========> */}
        <TextField
          id="outlined-multiline-flexible"
          label="Say Something Nice!"
          multiline
          maxRows={4}
          value={textValue}
          onChange={handleChange}
          sx={{
            width: "80%",
            m: "1rem",
          }}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            my: "1rem",
            fontSize: 16,
            padding: 1,
            color: "white",
            "&:hover": {
              color: "#37cd7b",
              backgroundColor: "white",
            },
            bgcolor: "#37cd7b",
            borderTopLeftRadius: "5rem",
            borderBottomLeftRadius: "5rem",
            borderBottomRightRadius: "5rem",
          }}
        >
          POST KUDO
        </Button>
      </Paper>
    </>
  );
}
