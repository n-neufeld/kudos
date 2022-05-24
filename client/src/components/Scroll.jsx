import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box } from "@mui/system";




 const Scroll = (showBelow) => {
    const [show, setShow] = useState(showBelow ? false : true);
    
    const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
        if (!show) setShow(true);
      } else {
        if (show) setShow(false);
      }
    };
    console.log(show);
    useEffect(() => {
      if (showBelow) {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }
    });
    
    const handleClick = () => {
      window["scrollTo"]({ top: 0, behaviour: "smooth" });
    };


  return (
    <Box>
      {show && (
        <IconButton onClick={handleClick} sx={{
            zIndex:'2',
            position:'fixed',
            bottom: '2vh',
            backgroundColor:'#DCDCDC',
            color:'black',
            '&:hover, &.Mui-focusVisible': {
                transition: '0.3s',
                color:'#397BA6',
                backgroundColor:'#DCDCDC'
            }
        }}>
          <ExpandLessIcon />
        </IconButton>
      )}
    </Box>
  );
}

export default Scroll