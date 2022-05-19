import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CelebrationIcon from "@mui/icons-material/Celebration";

const settings = ["Dashboard", "Logout"];
// const creates = [];

const Header = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   // <====================> OPEN MENU <====================>
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   //  <====================> CLOSE MENU <====================>
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
    <AppBar
      position="relative"
      color="grey"
      sx={{
        display: { xs: "flex", md: "flex", lg:'none'},
        width: "95%",
        mx: ".5rem",
        my: ".5rem",
        borderRadius: ".25rem",
        boxShadow: "0px 0px 10px #ccc, -0px -0px 10px #fff",
        background:
          "white",
      }}
    >
      <Container
        variant="contained"
        maxWidth="xl"
      >
        <Toolbar disableGutters>
          {/* <====================> ICON & TITLE + <====================> */}
          <Box
            component="a"
            href="/"
            variant="h5"
            noWrap
            sx={{
              display: { xs: "flex", md: "flex",},
              justifyContent:'flex-end',
              flexGrow: 1,
              fontFamily: "Titillium Web",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#008996",
              textDecoration: "none",
            }}
          >

            <CelebrationIcon
              sx={{
                mr: 1,
                color: "#FF8B53",
              }}
            />
            {/* <==========> HEADER TITLE <==========> */}
            <Typography>KUDOS</Typography>
            {/* <==========> HEADER ICON <==========> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
