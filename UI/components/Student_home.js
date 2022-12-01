import React, { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import Student from "./Student_profile";
import { useNavigate } from 'react-router-dom';


function Student_home() {
  
    const navigate = useNavigate(); 

    const routeChange = (e) =>{ 
        console.log(e.currentTarget.id)
        navigate("/Student_home?id="+`${e.currentTarget.id}`);
      }

  
    return (
        
    <div>
    
        <Button onClick={routeChange} type='submit' variant='contained' sx={{marginTop:3, borderRadius:3}}>Student Profile</Button> <br/>
        
    </div>
    );
  }
  
  export default Student_home;
  