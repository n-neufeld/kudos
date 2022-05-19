import { Modal } from "@mui/material";
import React from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  p: "50%",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>CLOSE</button>
        {children}
      </div>
    </>
  );
}
