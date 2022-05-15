import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SentimentVerySatisfiedSharpIcon from "@mui/icons-material/SentimentVerySatisfiedSharp";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KudoForm from '../../components/KudoForm/KudoForm';
// import axios from "axios";
// import { API_URL } from "../../App";
import Header from "../../components/Header/Header";
// import { styled } from "@mui/material/styles";
// import Collapse from "@mui/material/Collapse";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { getData } from "../../api/getData";

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

  const [data, setData] = useState([]);

  let kudosCard = [];

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {/* <====================> HEADER <====================> */}
      <Header />
      {/* <====================> KUDO CARD <====================> */}
      <Card
        sx={{
          maxWidth: 345,
          my: 2,
          mx: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "1rem",
          borderTopRightRadius: "0",
          boxShadow: "10px -5px 10px #ccc, -20px -20px 100px #fff",
          borderRight: "1px solid #ccc",
          borderTop: "1px solid #ccc",
        }}
      >
        {/* <==========> CARD HEADER <==========> */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#008996" }} aria-label="recipe"></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="placeholder"
          subheader="11424234245534"
        />
        {/* <==========> CARD IMAGE <==========> */}
        <CardMedia
          sx={{ width: "90%" }}
          component="img"
          height="194"
          image="placholder"
          alt="placeholder image"
        />
        {/* <==========> CARD COMMENT <==========> */}
        <CardContent>
          <KudoForm/>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton aria-label="like">
            <SentimentVerySatisfiedSharpIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon sx={{}} />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CreateKudo;
