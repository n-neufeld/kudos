import Card from "@mui/material/Card";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import KudoForm from "../../components/KudoForm/KudoForm";
import Header from "../../components/Header/Header";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

function CreateKudo() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let kudosCard = [];

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
          maxWidth: 350,
          minWidth: 300,
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
    </Box>
  );
}

export default CreateKudo;
