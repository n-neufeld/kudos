import Card from "@mui/material/Card";
import React from "react";
import Box from "@mui/material/Box";
import KudoForm from "../components/KudoForm";
import Header from "../components/Header";
import Footer from '../components/Footer'

function CreateKudo() {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <====================> HEADER <====================> */}
      <Header />
      {/* <====================> KUDO CARD <====================> */}
      <Card
        sx={{
          maxWidth: 320,
          width: '90%',
          mt: 2,
          mb: 10,
          mx: 2,
          borderRadius: "1rem",
          borderTopRightRadius: "0",
          boxShadow: "2px -5px 10px #ccc, -20px -20px 100px #fff",
          borderRight: "1px solid #ccc",
          borderTop: "1px solid #ccc",
        }}
      >
        {/* <==========> CARD FORM <==========> */}
        <KudoForm />
      </Card>
      <Footer />
    </Box>
  );
}

export default CreateKudo;
