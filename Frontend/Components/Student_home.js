import React, { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import Student from "./Student_profile";
import navigation from "./Navigation";



function Student_home() {
  
    useEffect(()=>{

	},[])

  
    return (
        
    <div>
       <navigation/>
        <Button onClick={<Student/>} type='submit' variant='contained' sx={{marginTop:3, borderRadius:3}}>Student Profile</Button> <br/>
        
    </div>
    );
  }
  
  export default Student_home;
  