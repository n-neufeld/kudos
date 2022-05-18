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
import axios from "axios";
import { API_URL } from "../App";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

export default function Kudo() {
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const [data, setData] = useState([]);
  const { id } = useParams();

  // <====================> RETRIEVE THE DATA FROM THE SERVER <====================>
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/kudos/${id}`,
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
      setIsLoading(false);
    });
  }, [id]);

  // <====================> POST THE DATA FROM THE SERVER <====================>

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
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {!isLoading && (
          <Card
            sx={{
              maxWidth: 345,
              minWidth: 300,
              my: 2,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "1rem",
              borderTopRightRadius: "0",
              boxShadow: "2px -5px 10px #ccc, -20px -20px 100px #fff",
              borderRight: "1px solid #ccc",
              borderTop: "1px solid #ccc",
            }}
          >
            {/* <==========> CARD HEADER <==========> */}
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#008996" }} aria-label="recipe">
                  {/* {data.name.charAt(0)} */}
                  {/* <========================================== Doesn't accecpt the array `[0]`  */}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              // title={`${data.name} recognized ${data.recipient.name}`} // <======================= 'name' is undefined?
              subheader={new Date(data.timestamp).toLocaleDateString()}
            />
            {/* <==========> CARD IMAGE <==========> */}
            <CardMedia
              sx={{ width: "90%" }}
              component="img"
              height="194"
              image={data.image}
              alt="Paella dish"
            />
            {/* <==========> CARD COMMENT <==========> */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {data.text}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton aria-label="like">
                <SentimentVerySatisfiedSharpIcon />
              </IconButton>
              <IconButton aria-label="comment">
                <CommentIcon sx={{}} />
              </IconButton>
            </CardActions>
          </Card>
        )}
      </Box>
    </Box>
  );
}
