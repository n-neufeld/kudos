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
import axios from "axios";
import { API_URL } from "../App";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Badge } from "@mui/material";
import CommentForm from "../components/CommentForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemAvatar,
} from "@mui/material";
import { formatDistance } from "date-fns";
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

export default function Kudo() {
  //*==============================> CARD <==============================*//
  const [isLoading, setIsLoading] = useState(true);
  //*===========> COMMENTS <===========*//
  const [users, setUsers] = useState([]);

  //*===========> ID FOR EACH KUDO <===========*//
  const { id } = useParams();

  //*===========> GET THE DATA <===========*//
  const [data, setData] = useState([]);

  //*===========> RETRIEVE THE DATA FROM THE SERVER <===========*//
  useEffect(() => {
    //*===========> CALL FOR INDIVIDUAL ID <===========*//
    axios({
      method: "get",
      url: `${API_URL}/kudos/${id}`,
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((res) => {
      setData(res.data);
    });
    //*===========> CALL FOR ALL DATA <===========*//
    axios({
      method: "get",
      url: `${API_URL}/kudos`,
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    });
  }, [isLoading]);

  //*===========> HANDLE LIKE COUNT <===========*//
  const handleLikes = (event) => {
    event.preventDefault();
    axios({
      method: "put",
      url: `${API_URL}/kudos/${id}/likes`,
    }).then((res) => {
      setIsLoading(true);
    });
  };
  //*====================================================================*//

  //*=============================> RETURN <=============================*//
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "20rem",
      }}
    >
      {/*===========> PAGE HEADER <===========*/}
      <Header />
      {/*===========> KUDO CARD <===========*/}
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {!isLoading && (
          <Box
            SX={{
              display: { xs: "flex", md: "flex", lg: "none" },
              flexDirection: "column",
            }}
          >
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
              {/*===========> KUDO CARD HEADER <===========*/}
              <CardHeader
                //*===========> KUDO CARD AVATAR <===========/*/
                avatar={
                  <Avatar sx={{ bgcolor: "#008996" }} aria-label="recipe">
                    {getAuthor(users, data).charAt(0)}
                  </Avatar>
                }
                //*===========> KUDO CARD AUTHOR & RECIPIENT <===========*//
                title={`${getAuthor(users, data)} recognized ${getRecipient(
                  users,
                  data
                )}`}
                //*===========> KUDO CARD DATE <===========*//
                subheader={new Date(data.timestamp).toLocaleDateString(
                  "en-us",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )}
              />
              {/*===========> KUDO CARD CANVAS KALEIDOSCOPE <===========*/}
              <CardMedia
                sx={{ width: "90%" }}
                component="img"
                width="180"
                image={data.image}
                alt="Kaleidoscope Image"
              />
              {/*===========> KUDO CARD COMMENT <===========*/}
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {data.text}
                </Typography>
              </CardContent>
              {/*===========> KUDO CARD ICONS <===========*/}
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                {/*===========> KUDO CARD LIKES ICON <===========*/}
                <IconButton aria-label="like" onClick={handleLikes}>
                  <ThemeProvider theme={theme}>
                    <Badge badgeContent={data.likes} color="primary">
                      <SentimentVerySatisfiedSharpIcon />
                    </Badge>
                  </ThemeProvider>
                </IconButton>
                {/*===========> KUDO CARD COMMENTS ICON <===========*/}
                <IconButton aria-label="comment">
                  <ThemeProvider theme={theme}>
                    <Badge
                      badgeContent={data.comments.length}
                      color="secondary"
                    >
                      <CommentIcon />
                    </Badge>
                  </ThemeProvider>
                </IconButton>
              </CardActions>
            </Card>
            {/*=======================================================================*/}
            {/*=====================> COMMENTS SECTION <=====================*/}
            <Paper
              sx={{
                backgroundColor: "rgba(0,0,0,0)",
                boxShadow: "none",
                width: "100%",
              }}
            >
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/*===========> EACH COMMENT <===========*/}
                {data.comments.map((c) => (
                  <ListItem
                    key={c.id}
                    sx={{
                      width: "90%",
                      maxWidth: "23rem",
                      my: 1,
                      borderRadius: "1rem",
                      borderTopRightRadius: "0",
                      boxShadow: "2px -5px 10px #ccc, -20px -20px 100px #fff",
                      borderRight: "1px solid #ccc",
                      borderTop: "1px solid #ccc",
                      backgroundColor: "white",
                    }}
                  >
                    {/*===========> COMMENT AVATAR <===========*/}
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#008996" }} aria-label="recipe">
                        {getAuthor(users, c).charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    {/*===========> COMMENT TEXT <===========*/}
                    <Box>
                      <ListItemText
                        //*===========> COMMENT AUTHOR <===========*//
                        primary={getAuthor(users, c)}
                        //*===========> COMMENT TEXT <===========*//
                        secondary={c.text}
                      />
                      {/*===========> COMMENT TIMESTAMP <===========*/}
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: ".65rem",
                          color: "#888181",
                        }}
                      >
                        {formatDistance(new Date(c.timestamp), new Date(), {
                          addSuffix: true,
                        })}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <CommentForm id={data.id} setIsLoading={setIsLoading} />
      </Box>
      <Footer />
    </Box>
  );
}
