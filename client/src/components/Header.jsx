import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Button } from "@mui/material";

const settings = ["Dashboard", "Logout"];
// const creates = [];

const Header = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  //*=====================> OPEN MENU <=====================*//
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  //*=====================> CLOSE MENU <=====================*//
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="relative"
      color="grey"
      sx={{
        width: "95%",
        mx: ".5rem",
        my: ".5rem",
        borderRadius: ".25rem",
        boxShadow: "10px -5px 10px #ccc, -20px -20px 100px #fff",
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 20%, rgba(183,203,231,1) 40%, rgba(166,210,208,1) 65%, rgba(236,188,171,1) 95%)",
      }}
    >
      <Container
        variant="contained"
        maxWidth="xl"
        sx={{
          p: "0.5rem",
        }}
      >
        <Toolbar disableGutters>
          {/*=====================> ICON & TITLE <=====================*/}
          <Box
            component="a"
            href="/"
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              flexGrow: 1,
              fontFamily: "Titillium Web",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#008996",
              textDecoration: "none",
            }}
          >
            {/*===========> HEADER ICON <===========*/}
            <CelebrationIcon
              sx={{
                mr: 1,
                color: "#FF8B53",
              }}
            />
            {/*===========> HEADER TITLE <===========*/}
            <Typography>KUDOS</Typography>
          </Box>

          {/*=====================> PROFILE / CREATE KUDO CONTAINER <=====================*/}
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box sx={{ flexGrow: 0, md: "flex" }}>
              {/*===========> AVATAR ICON <===========*/}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Nathaniel Neufeld"
                    src="/static/images/avatar/2.jpg"
                    sx={{ bgcolor: "#FF8B53" }}
                  />
                </IconButton>
              </Tooltip>
              {/*===========> PROFILE MENU DROPDOWN <===========*/}
              <Menu
                sx={{ mt: "50px", mr: "50px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/*=====================> CREATE KUDO BUTTON <=====================*/}
            <Button
              href="/create-kudo"
              variant="contained"
              sx={{
                fontSize: 16,
                padding: 1,
                ml: ".5rem",
                md: "flex",
                lg: "flex",
                color: "white",
                "&:hover": {
                  color: "#37cd7b",
                  backgroundColor: "white",
                  "& .MuiSvgIcon-root": {
                    color: "#37cd7b",
                    transitions: {
                      easing: {
                        easeIn: "1s",
                        easeOut: "1s",
                      },
                    },
                  },
                },
                bgcolor: "#37cd7b",
                borderTopLeftRadius: "5rem",
                borderBottomLeftRadius: "5rem",
                borderBottomRightRadius: "5rem",
              }}
              startIcon={
                <AddBoxIcon
                  sx={{ size: "large", m: "0", padding: 0, color: "white" }}
                ></AddBoxIcon>
              }
            >
              KUDO!
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
