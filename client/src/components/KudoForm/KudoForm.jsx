import { FormControl, Typography } from "@mui/material";
import React from "react";

// THE COMMENT FORM ON THE VIDEO PAGE
function KudoForm() {
  return (
    <section>
      <FormControl>
        <Typography gutterBottom varient='h3' align='center'>KUDO</Typography>
      </FormControl>
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
