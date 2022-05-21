import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Footer() {

  return (
    <AppBar
      position="relative"
      color="grey"
      sx={{
        display: 'flex',
        justifyContent:"flex-end",
        alignItems:'center',
        width: "95%",
        mx: ".5rem",
        my: ".5rem",
        borderRadius: ".25rem",
        boxShadow: "none",
        background: "rgba(0,0,0,0)",
      }}
    >
      <Container variant="contained" maxWidth="xl">
        <Toolbar disableGutters>
          {/* <====================> ICON & TITLE + <====================> */}
            <Box 
            sx={{
              display: 'flex',
              justifyContent:'flex-end',
              flexGrow: 1,
              background: "rgba(0,0,0,0)",
              
            }}>
              {/* <==========> FOOTER ICON <==========> */}
              <Button
              
              // component="a"
              // href="/"
              sx={{
                display: 'flex',
                justifyContent:'center',
                p:'1rem',
                borderRadius: "50rem",
                minWidth:'0',
                textDecoration: "none",
                boxShadow: "0px 0px 10px #ccc, -0px -0px 10px #fff",
                background: "#fff",
              }}
              >
              <ArrowUpwardIcon
                sx={{
                  p:'0',
                  m:'0',
                  color: "#008996",
                }}
              />
              </Button>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
