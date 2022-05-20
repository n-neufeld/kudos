import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { API_URL } from "../App";
import Header from "../components/Header";
import { CardActionArea } from "@mui/material";
import Footer from "../components/Footer";
import { IconButton, Badge, Star } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import placeholder from "../assets/kaleidoscopeCanvas/kc3.png";

function KudosPage() {
  const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // <====================> RETRIEVE THE DATA FROM THE SERVER <====================>
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/kudos`,
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "20rem",
      }}
    >
      {/* <====================> PAGE HEADER <====================> */}
      <Header />
      {/* <====================> KUDO CARDS POSTED <====================> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {!isLoading &&
          data.map((u) => {
            if (u.kudos) {
              return u.kudos.map((k) => (
                // <====================> KUDO CARD <====================>
                <CardActionArea
                  href={`/kudos/${k.id}`}
                  key={k.id}
                  sx={{
                    width:'22rem'
                  }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      maxWidth: 345,
                      my: 2,
                      mx: 2,
                      borderRadius: "1rem",
                      borderTopRightRadius: "0",
                      boxShadow: "2px -5px 10px #ccc, -20px -20px 100px #fff",
                      borderRight: "1px solid #ccc",
                      borderTop: "1px solid #ccc",
                    }}
                  >
                    {/* <CardActionArea
                      sx={{
                      }}
                    > */}
                    {/* <==========> CARD HEADER <==========> */}
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: "#008996" }} aria-label="recipe">
                          {u.name.charAt(0)}
                        </Avatar>
                      }
                      title={`${
                        data.find((u) => u.userId === k.author).name
                      } recognized ${u.name}`}
                      subheader={new Date(k.timestamp).toLocaleDateString()}
                    />
                    {/* <==========> CARD IMAGE <==========> */}
                    <CardMedia
                      sx={{ width: "90%", borderRadius: "1rem" }}
                      component="img"
                      width="180"
                      image={placeholder}
                      alt="Kaleidoscope Image"
                    />
                    {/* <==========> CARD TEXT <==========> */}
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {k.text}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    ></CardActions>
                    {/* </CardActionArea> */}
                    {/* <==========> CARD COMMENT ICON <==========> */}
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <IconButton aria-label="comments">
                        <Badge
                          badgeContent={k.comments.length}
                          color="secondary"
                        >
                          <CommentIcon />
                        </Badge>
                      </IconButton>
                    </CardActions>
                  </Card>
                </CardActionArea>
              ));
            }
          })}
      </Box>
      <Footer />
    </Box>
  );
}

export default KudosPage;
