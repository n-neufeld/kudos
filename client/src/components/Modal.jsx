import React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MODAL_STYLES = {
  maxWidth:'20rem',
  width: '70%',
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(0,0,0,0)",
  padding: "1rem",
  zIndex: 1000,
  // borderRadius: "1rem",
  // borderTopRightRadius: "0",
  // boxShadow: "20px 20px 50px #2a2a2a",
  // border: "1px solid #ccc",
  display: "flex",
  flexDirection: "column",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  background: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

export default function modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <Box style={MODAL_STYLES}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              width: "2rem",
              p: "0",
              mb: "1rem",
              color: "white",
              bgcolor: "#FF8B53",
              borderRadius: ".5rem",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}>
        {children}
        </Box>
      </Box>
    </>
  );
}
