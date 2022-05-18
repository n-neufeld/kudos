import React, { useEffect, useState } from "react";
import { Grid, Autocomplete, Box, TextField, FormControl } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import placeholder from "../assets/image-placeholder.jpeg";
import { Button } from "@mui/material";
import { useForm, Form } from "./useForm";
import { CardContent } from "@mui/material";
import Input from "./controls/Input";
import * as employees from "../employees/employees";
import axios from "axios";
import { API_URL } from "../App";

import {
  createCanvas,
  angleMode,
  DEGREES,
  background,
  createButton,
  colorMode,
  HSB,
  save,
  translate,
  width,
  height,
  mouseX,
  mouseY,
  pmouseX,
  pmouseY,
  mouseIsPressed,
  map,
  sin,
  stroke,
  pop,
  push,
  rotate,
  dist,
  strokeWeight,
  line,
  scale,
  p5,
} from "react-p5";

import Sketch from "react-p5";

/* <====================> DEFINED FORM PROPERTIES <====================> */
const initialFValues = {
  name: "",
  id: 0,
  fullName: "",
  comment: "",
  postDate: new Date(),
};

export default function KudoForm() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  const [textValue, setTextValue] = React.useState("");

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSubmit = (event) => {
    //Make a network call somewhere
    event.preventDefault();
    axios({
      method: "post", // <== ALTERNATIVE POST METHOD. Was having trouble with post for some reason
      url: `${API_URL}/kudos/create`,
      data: {
        kudo: textValue,
        recipient: selectedUser,
      },
    });
  };

  let symmetry = 6;
  let angle = 360 / symmetry;
  let saveButton;
  let clearButton;
  let xoff = 0;

  const setup = (p5, parentRef) => {
    p5.createCanvas(300, 300).parent(parentRef);
    p5.angleMode(DEGREES);
    p5.background(250);
    // saveButton = p5.createButton("save");
    // saveButton.mousePressed(saveSnowflake);
    // clearButton = p5.createButton("clear");
    // clearButton.mousePressed(clearCanvas);
    p5.colorMode(HSB, 255, 255, 255);
  };

  function saveSnowflake() {
    save("snowflake.png");
  }

  function clearCanvas(p5) {
    p5.background(250);
  }

  const draw = (p5) => {
    p5.translate(p5.width / 2, p5.height / 2);
    if (
      p5.mouseX > 0 &&
      p5.mouseX < p5.width &&
      p5.mouseY > 0 &&
      p5.mouseY < height
    ) {
      let mx = mouseX - width / 2;
      let my = mouseY - height / 2;
      let pmx = pmouseX - width / 2;
      let pmy = pmouseY - height / 2;

      if (mouseIsPressed) {
        let hu = map(sin(xoff), -1, 1, 0, 360);
        xoff += 0.1;
        stroke(hu, 255, 255, 100);
        let angle = 360 / symmetry;
        for (let i = 0; i < symmetry; i++) {
          rotate(angle);
          let d = dist(mx, my, pmx, pmy);
          let sw = map(d, 0, 8, 8, 1);
          strokeWeight(sw);
          push();
          line(mx, my, pmx, pmy);
          pop();
          push();
          scale(-1, 1);
          line(mx, my, pmx, pmy);
          pop();
        }
      }
    }
  };
  // <====================> RETRIEVE THE DATA FROM THE SERVER <====================>
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
        // width: "100%",
      }}
    >
      <FormControl>
        {/* <====================> FORM CONTAINER <====================> */}

        {/* sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: ".5rem",
          }} */}

        {/* <==========> RECIPIENT <==========> */}

        <Autocomplete
          value={selectedUser}
          id="user-select"
          sx={{ width: 300, mb: 2 }}
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

        {/* <==========> KUDO <==========> */}

        <TextField
          id="outlined-multiline-flexible"
          label="Say something nice"
          multiline
          maxRows={4}
          value={textValue}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        {/* <====================> IMAGE <====================> */}
        <Grid width="300" height="300">
          {/* <CardMedia
            component="img"
            height="194"
            image={placeholder}
            alt="placeholder image"
          /> */}
          <Sketch setup={setup} draw={draw} />
        </Grid>

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
