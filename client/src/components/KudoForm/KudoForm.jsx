import React, { useState, } from "react";
import {  Grid, TextField, } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import placeholder from "../../assets/image-placeholder.jpeg";
import { Button } from "@mui/material";

/* <====================> DEFINED FORM PROPERTIES <====================> */
const initialFValues = {
  name: "",
  id: 0,
  fullName: "",
  comment: "",
  postDate: new Date(),
};

export default function KudoForm() {
  
  {/* <====================> SET STATE <====================> */}
  const [values, setValues] = useState({ initialFValues });
  {/* <====================> INPUT CHANGE HANDLER <====================> */}
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  
  

  return (
    <form>
      {/* <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "",
          maxWidth: 280,
          minWidth: 280,
        }} 
       > */}
        {/* <====================> FORM <====================> */}
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: ".5rem",
          }}
        >
          <Grid
            item
            xs={6}
            sx={{
              mb: ".5rem",
            }}
          >
            <TextField
              variant="outlined"
              label="Recipient"
              placeholder="Select Recipient"
              name="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              mb: ".5rem",
            }}
          >
            <TextField
              variant="outlined"
              label="Kudo"
              name="Kudo"
              placeholder="Leave your Kudo here!"
              value={values.kudo}
            />
          </Grid>
        </Grid>

        {/* <====================> IMAGE <====================> */}
        <CardMedia
          sx={{ width: "90%" }}
          component="img"
          height="194"
          image={placeholder}
          alt="placeholder image"
        />
        {/* <====================> SUBMIT KUDO <====================> */}
        <Button
          href="/create-kudo"
          variant="contained"
          sx={{
            m: '1rem',
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
      {/* </CardContent> */}
    </form>
  );
}
