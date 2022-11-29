import React, { useState } from 'react';
import {Box,Button,TextField,Typography} from '@mui/material';
import { border, borderRadius, boxSizing } from '@mui/system';
import { Email, Password } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useHistory } from "react-router-dom";

function Auth() {
    const[isSignup, setisSignup] = useState(false)
    const [loginType, setLoginType] = useState("Student_Login")
    const[input,setInput] = useState({
        name:"",
        email:"",
        password:"",
    })

    

    const changeHandlerLoginType = (e)=>{
      console.log(e.target.value);
      setLoginType(e.target.value);
    }

    const handleChange = (e) => {
        setInput((prevState)=> ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }
    const resetState = (e) => {
        setisSignup(!isSignup);
        setInput({name:'', email:'', password:''})
    }
    console.log(isSignup);
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <Box display = "flex" 
          flexDirection={"column"} 
          maxWidth={350} 
          alignItems="center" 
          justifyContent={'center'}
          margin = 'auto'
          marginTop={5}
          padding = {5}
          borderRadius={5}
          boxShadow = {'5px 5px 10px #ccc'}
          sx={{
            ":hover":{ boxShadow: "10px 10px 20px #ccc"},
          }}>
            

            <Typography variant='h2' padding={3} textAlign="center"> 
            <b>{isSignup ? "SignUp":"Login"}</b>
            </Typography>
            {
                isSignup && 
                <TextField onChange={handleChange} value={input.name} name ='name' margin='normal' type={'text'} variant='outlined' placeholder='Name'/>
            }
            

            <TextField onChange={handleChange} name ='email' value={input.email} margin='normal' type={'Email'} variant='outlined' placeholder='Email'/>
            <TextField onChange={handleChange} name ='password'  value={input.password} margin='normal' type={'Password'}  placeholder='Password'/>

            <Button endIcon={isSignup? <HowToRegIcon/> :<LoginIcon/>} type='submit' sx={{marginTop:3, borderRadius:3}} variant='contained'>
                {isSignup?"SignUp":"Login"}
            </Button>

            <Button endIcon={isSignup? <LoginIcon/> : <HowToRegIcon/>} onClick={resetState} sx={{marginTop:3, borderRadius:3}}>
             Change to {isSignup ? "Login":"SignUp"}
            </Button>

          </Box>
        </form>
    </div>
  );
}

export default Auth;
