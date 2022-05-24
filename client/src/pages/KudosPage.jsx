import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { IconButton, Badge, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import SentimentVerySatisfiedSharpIcon from "@mui/icons-material/SentimentVerySatisfiedSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { API_URL } from "../App";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import { getAuthor, getRecipient } from "../helper/helper";

//*====================> SET THEME COLORS FOR BADGES <====================*//
const theme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FF8B53",
      contrastText: "#fff",
    },
  },
});

function KudosPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //*=====================> RETRIEVE THE DATA FROM THE SERVER <=====================*//
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

  let kudosObjects = []; //create an array to store objects, so we can sort

  data.forEach((u) => {
    //loop through data and for each user if user has kudos, push those kudos into the array we created
    if (u.kudos) {
      u.kudos.forEach((k) => {
        kudosObjects.push(k);
      });
    }
  });

  //*=============================> RETURN <=============================*//
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "20rem",
      }}
    >
      <Scroll showBelow={250} />
      {/*=====================> PAGE HEADER <=====================*/}
      <Header />
      {/*=====================> KUDO CARDS POSTED <=====================*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {!isLoading && //if data is fetched
          kudosObjects
            .sort((a, b) => {
              //sort kudos by timestamp
              return new Date(b.timestamp) - new Date(a.timestamp);
            })
            .map((k) => (
              //map kudos into cards
              <CardActionArea
                href={`/kudos/${k.id}`}
                key={k.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent:'space-between',
                  maxWidth: 345,
                  my: 2,
                  mx: 2,
                  borderRadius: "1rem",
                  borderTopRightRadius: "0",
                  boxShadow: "2px -5px 10px #ccc, -20px -20px 100px #fff",
                  borderRight: "1px solid #ccc",
                  borderTop: "1px solid #ccc",
                  backgroundColor: "#fff",
                  "&:hover": {
                    backgroundColor: "#fbe9e7",
                  },
                }}
              >
                {/*===========> CARD HEADER <===========*/}
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#008996" }} aria-label="recipe">
                      {getRecipient(data, k).charAt(0)}
                    </Avatar>
                  }
                  title={`${getAuthor(data, k)} recognized ${getRecipient(
                    data,
                    k
                  )} `}
                  subheader={new Date(k.timestamp).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                />
                {/*===========> CARD CANVAS IMAGE <===========*/}
                <CardMedia
                  sx={{ width: "90%", borderRadius: "1rem" }}
                  component="img"
                  width="180"
                  image={`${k.image}`}
                  alt="Kaleidoscope Image"
                />
                {/*===========> CARD TEXT <===========*/}
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
                {/*===========> CARD ICONS <===========*/}
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/*===========> CARD LIKE ICON <===========*/}
                  <IconButton aria-label="like">
                    <ThemeProvider theme={theme}>
                      <Badge badgeContent={k.likes} color="primary">
                        <SentimentVerySatisfiedSharpIcon />
                      </Badge>
                    </ThemeProvider>
                  </IconButton>
                  {/*===========> CARD COMMENT ICON <===========*/}
                  <IconButton aria-label="comments">
                    <ThemeProvider theme={theme}>
                      <Badge badgeContent={k.comments.length} color="secondary">
                        <CommentIcon />
                      </Badge>
                    </ThemeProvider>
                  </IconButton>
                </CardActions>
              </CardActionArea>
            ))}
      </Box>
      <Footer />
    </Box>
  );
}

export default KudosPage;
