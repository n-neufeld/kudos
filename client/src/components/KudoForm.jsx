import React, { useEffect, useState } from "react";
import { Grid, Autocomplete, Box, TextField, FormControl } from "@mui/material";
// import CardMedia from "@mui/material/CardMedia";
// import placeholder from "../assets/image-placeholder.jpeg";
import { Button } from "@mui/material";
// import { useForm, Form } from "./useForm";
import { CardContent } from "@mui/material";
// import Input from "./controls/Input";
// import * as employees from "../employees/employees";
import axios from "axios";
import { API_URL } from "../App";
import KaleidoscopeDesign from "./KaleidoscopeDesign";
import { CardMedia } from "@mui/material";
import placeholder from '../assets/kaleidoscopeC/CK.png'


/* <====================> DEFINED FORM PROPERTIES <====================> */
// const initialFValues = {
//   name: "",
//   id: 0,
//   fullName: "",
//   comment: "",
//   postDate: new Date(),
// };

export default function KudoForm() {
  const [users, setUsers] = useState([]);
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

// <====================> CANVAS <====================> //
  
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
        width:'90%'
      }}
    >
      <FormControl sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width:'100%'
      }}>

        {/* <==========> RECIPIENT <==========> */}
        <Autocomplete
          value={selectedUser}
          id="user-select"
          sx={{ width: '100%', mb: 2 }}
          options={users}
          autoHighlight
          getOptionLabel={(user) => user.name}
          onChange={(event, user) => {
            setSelectedUser(user);
            console.log(selectedUser);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Choose a recipient" />
          )}
        />

        {/* <==========> SAY SOMETHING NICE <==========> */}
        <TextField
          id="outlined-multiline-flexible"
          label="Say Something Nice!"
          multiline
          maxRows={4}
          value={textValue}
          onChange={handleChange}
          sx={{ width: '100%', mb: 2 }}
        />

        {/* <====================> CANVAS IMAGE <====================> */}
        <Box sx={{
          width:'100%'
        }}>
          <CardMedia
            component="img"
            width='180'
            image={placeholder}
            alt="placeholder image"
          />
          {/* <KaleidoscopeDesign /> */}
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
