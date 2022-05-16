import React from "react";
import { Grid, TextField } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import placeholder from "../../assets/image-placeholder.jpeg";
import { Button } from "@mui/material";
import { useForm, Form } from "../useForm";
import { CardContent } from "@mui/material";
import Input from "../controls/Input";
import Select from '../controls/Select'
import * as employees from '../../employees/employees'

/* <====================> DEFINED FORM PROPERTIES <====================> */
const initialFValues = {
  name: "",
  id: 0,
  fullName: "",
  comment: "",
  postDate: new Date(),
};

export default function KudoForm() {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <====================> FORM CONTAINER <====================> */}
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: ".5rem",
          }}
        >
          {/* <==========> RECIPIENT <==========> */}
          <Grid
            item
            xs={6}
            sx={{
              mb: ".5rem",
            }}
          >
            <Select
              label="Recipient"
              placeholder="Select Recipient"
              name="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
              options={[employees.getEmployees]}
            />


          </Grid>
          {/* <==========> KUDO <==========> */}
          <Grid
            item
            xs={6}
            sx={{
              mb: ".5rem",
            }}
            >
            <Input
              variant="outlined"
              label="Kudo"
              name="Kudo"
              placeholder="Leave your Kudo here!"
              value={values.kudo}
              onChange={handleInputChange}
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
            m: "1rem",
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
    </Form>
  );
}
