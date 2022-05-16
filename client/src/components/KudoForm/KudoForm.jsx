import React, { useState, useEffect } from "react";
import { Card, FormControl, Grid, TextField, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import placeholder from "../../assets/image-placeholder.jpeg";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

/* <====================> DEFINED FORM PROPERTIES <====================> */
const initialFValues = {
  employeeId:'',
  id: 0,
  name: "",
  comment: "",
  postDate: new Date()
}

function KudoForm() {
  {/* <====================> SET STATE <====================> */}
  const [values, setValues] = useState({
  });

  useEffect(()=>{

  },[values])

  return (
    <form>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "",
          maxWidth: 280,
          minWidth: 280,
        }}
      >
        {/* <====================> FORM <====================> */}
        <Grid>
            <TextField
              variant="outlined"
              label="Recipient"
              placeholder="Select Recipient"
              // value={}
            />
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
      </CardContent>
    </form>
  );
}

export default KudoForm;
