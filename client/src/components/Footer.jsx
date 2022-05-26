import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

export default function Footer() {
  
  return (
    <AppBar
      position="relative"
      color="grey"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
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
              display: "flex",
              justifyContent: "flex-end",
              flexGrow: 1,
              background: "rgba(0,0,0,0)",
            }}
          >
            {/* <==========> FOOTER ICON <==========> */}
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
