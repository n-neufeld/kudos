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
import Modal from "../components/Modal";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemAvatar,
} from "@mui/material";

export default function Kudo() {
  const [expanded, setExpanded] = useState(false);
  //<====================> CARD <====================>
  const [isLoading, setIsLoading] = useState(true);
  // <====================> MODAL <====================>
  const [modelOpen, setModalOpen] = useState(false);

  const [users, setUsers] = useState([]);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const [data, setData] = useState([]);
  const { id } = useParams();

  const getAuthor = (users) => {
    const author = users.find((u) => u.userId === data.author);
    return author.name;
  };

  const getRecipient = (users) => {
    const recipient = users.find((u) => u.userId === data.recipient);
    return recipient.name;
  };

  // <====================> RETRIEVE THE DATA FROM THE SERVER <====================>
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/kudos/${id}`,
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });

    axios({
      method: "get",
      url: `${API_URL}/kudos`,
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((res) => {
      setUsers(res.data);
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
          <>
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
                    {getAuthor(users).charAt(0)}
                    {/* <========================================== Doesn't accecpt the array `[0]`  */}
                  </Avatar>
                }
                title={`${getAuthor(users)} recognized ${getRecipient(users)}`} // <======================= 'name' is undefined?
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

                <div>
                  <IconButton
                    aria-label="comment"
                    onClick={() => setModalOpen(true)}
                  >
                    <CommentIcon sx={{}} />
                  </IconButton>
                  {/* <Modal open={modelOpen} onClose={() => setModalOpen(false)}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      minWidth: 300,

                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "1rem",
                      borderTopRightRadius: "0",
                      boxShadow: "20px 20px 50px #2a2a2a",
                      borderRight: "1px solid #ccc",
                      borderTop: "1px solid #ccc",
                    }}
                  >
                    <CardHeader
                      subheader={new Date(data.timestamp).toLocaleDateString()}
                    />
                    <CardContent>{data.text}</CardContent>
                  </Card>
                </Modal> */}
                </div>
              </CardActions>
            </Card>
            <Paper>
              <List>
                {data.comments.map((c) => (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#008996" }} aria-label="recipe">
                        {getAuthor(users).charAt(0)}
                        {/* <========================================== Doesn't accecpt the array `[0]`  */}
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      primary={users.find((u) => u.userId === c.author).name}
                      secondary={c.text}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </>
        )}
      </Box>
      <Footer />
    </Box>
  );
}
