import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box } from "@mui/system";




 const Scroll = (showBelow) => {
    
    const handleScroll = () => {};
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
        <IconButton onClick={handleClick} sx={{
            zIndex:'2',
            position:'fixed',
            bottom: '2vh',
            right: '4vh',
            backgroundColor:'#fff',
            color:'#FF8B53',
            boxShadow: "-5px 0px 10px #ccc, -20px -20px 100px #fff",
            '&:hover, &.Mui-focusVisible': {
                transition: '0.3s',
                color:'#fff',
                backgroundColor:'#FF8B53'
            }
        }}>
          <ExpandLessIcon />
        </IconButton>
    </Box>
  );
}

export default Scroll