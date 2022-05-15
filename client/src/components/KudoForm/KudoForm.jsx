import React from "react";
import { FormControl, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import placeholder from "../../assets/image-placeholder.jpeg";
import { Button } from "@mui/material";

// THE COMMENT FORM ON THE VIDEO PAGE
function KudoForm() {
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems:'center',
        justifyContent :'',
        maxWidth: 280,
        minWidth: 280,
      }}
    >
      {/* <====================> FORM <====================> */}
      <FormControl>
        <Typography gutterBottom varient="h3" align="center">
          KUDO
        </Typography>
      </FormControl>
      {/* <====================> IMAGE <====================> */}
      <CardMedia
        sx={{ width: "90%" }}
        component="img"
        height="194"
        image={placeholder}
        alt="placeholder image"
      />
      {/* <====================> SUBMIT KUDO <====================> */}
      <Button
        href="/create-kudo"
        variant="contained"
        sx={{
          fontSize: 16,
          padding: 1,
          color: "white",
          "&:hover": {
            color: "#37cd7b",
            backgroundColor: "white",
          },
          bgcolor: "#37cd7b",
          borderTopLeftRadius: "5rem",
          borderBottomLeftRadius: "5rem",
          borderBottomRightRadius: "5rem",
        }}
      >
        POST KUDO
      </Button>
    </section>
    // <section className='form-card'>
    //   <section className='form-container'>
    //     <img className='form-image' alt='user portrait'  src={profileImg} />
    //     <div className='comment'>
    //       <div className='comment__container'>
    //         <article className='comment__container-label'>
    //             JOIN THE CONVERSATION
    //         </article>
    //         <textarea className='comment-input' type='text' id='comment' name='comment' placeholder='Add a new comment' required />
    //       </div>
    //       <button className='comment-button'>COMMENT</button>
    //     </div>
    //   </section>
    // </section>
  );
}

export default KudoForm;
