import React, { useEffect, useState } from "react";
import { Autocomplete, Box, TextField, FormControl } from "@mui/material";
import { Button } from "@mui/material";
import { CardContent } from "@mui/material";
import axios from "axios";
import { API_URL } from "../App";
import KaleidoscopeDesign from "./KaleidoscopeDesign";
import { useHistory } from "react-router-dom";

export default function KudoForm() {
  const [users, setUsers] = useState([]);
  //*=====================> SELLECT RECIPIENT <=====================*//
  const [selectedUser, setSelectedUser] = useState({});

  const [textValue, setTextValue] = React.useState("");

  //*=====================> HANDLE POST NAVIGATION FOLLOWING THE KUDO POST <=====================*//
  const history = useHistory();

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  // const [triggerSave, setTriggerSave] = useState(false);
  const { v4: uuidv4 } = require("uuid");
  const newKudoId = uuidv4();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: `${API_URL}/kudos/create`,
      data: {
        kudo: textValue,
        recipient: selectedUser.id,
        id: newKudoId,
        author: 1, // for now using myself to post
      },
    });
    history.push(`/kudos/${newKudoId}`);
  };

  // <====================> RETRIEVE KUDO DATA FROM SERVER <====================>
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/kudos`,
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((res) => {
      const usersArray = res.data.map((k) => ({
        id: k.userId,
        name: k.name,
      }));
      setUsers(usersArray);
      setSelectedUser(usersArray[0]);
    });
  }, []);

  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
      }}
    >
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* <==========> RECIPIENT <==========> */}
        <Autocomplete
          value={selectedUser}
          id="user-select"
          sx={{ width: "100%", mb: 2 }}
          options={users}
          autoHighlight
          getOptionLabel={(user) => user.name}
          onChange={(event, user) => {
            setSelectedUser(user);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Choose a Recipient" />
          )}
        />

        {/* <==========> SAY SOMETHING NICE <==========> */}
        <TextField
          id="outlined-multiline-flexible"
          label="Say Something Nice!"
          multiline
          maxRows={2}
          value={textValue}
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />

        {/* <====================> KALEIDOSCOPE DESIGN <====================> */}
        <Box
          sx={{
            placeholder: "draw",
            display: "flex",
            justifyContent: "center",
            // alignItems:'center',
            width: "280",
            height: "280",
            pt: "0.2rem",
            border: "1px solid lightgrey",
            borderRadius: ".5rem",
          }}
        >
          {/* <CardMedia
            component="img"
            width='180'
            image={placeholder}
            alt="placeholder image"
          /> */}
          <KaleidoscopeDesign />
        </Box>

        {/* <====================> SUBMIT KUDO <====================> */}
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
      </FormControl>
    </CardContent>
  );
}
