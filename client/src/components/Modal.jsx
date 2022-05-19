import React from "react";
import { Button } from "@mui/material";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "2rem",
  zIndex: 1000,
  borderRadius: "1rem",
  borderTopRightRadius: "0",
  boxShadow: "20px 20px 50px #2a2a2a",
  border: "1px solid #ccc",
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
      <div style={OVERLAY_STYLES} sx={{
          display: "flex",
          flexDirection: "column",
          padding:'50rem'
        }} />
      <div
        style={MODAL_STYLES}
        
      >
        {children}
        <Button
          onClick={onClose}
          sx={{
            ml: ".5rem",
            color: "white",
            bgcolor: "#FF8B53",
            borderTopLeftRadius: "5rem",
            borderBottomLeftRadius: "5rem",
            borderBottomRightRadius: "5rem",
          }}
        >
          CLOSE
        </Button>
      </div>
    </>
  );
}
