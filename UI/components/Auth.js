import React, { useState } from 'react';
import {Box,Button,TextField,Typography} from '@mui/material';
import { border, borderRadius, boxSizing } from '@mui/system';
import { Email, Password } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

function Auth() {
    const[isSignup, setisSignup] = useState(false)
    const [loginType, setLoginType] = useState("Student_Login")
    const[input,setInput] = useState({
        name:"",
        age:"",
        email:"",
        password:"",
        university:"",
        program:"",
        role:"",
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

    const handleLogin = (e) =>{
      e.preventDefault()
      const data = {
        email:input.email,
        password:input.password
      }
      console.log(data);
      instance.post('users/login',data,{headers: {"content-type": "application/json"}})
        .then((res)=>{
          console.log(res);
        })
        .catch((err)=>{
          console.log(err);
        })
    }

    const handleRegister = (e) =>{
      e.preventDefault()
      const data = input
            console.log(data);

      // instance.post('user/register',data,{headers:{"content-type": "application/json"}})
      // .then((res)=>{
      //   console.log(res);
      // })
      // .catch((err)=>{
      //   console.log(err);
      // })
    }

    const resetState = (e) => {
        setisSignup(!isSignup);
        setInput({name:'', age:'',email:'', password:'',university:'',program:'',role:''})
    }
    console.log(isSignup);
  return (
    <div>
        <form>
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
            {
                isSignup && 
                <TextField onChange={handleChange} value={input.age} name ='age' margin='normal' type={'text'} variant='outlined' placeholder='Age'/>
            }
            {
              isSignup && 
              <TextField onChange={handleChange} value={input.university} name ='university' margin='normal' type={'text'} variant='outlined' placeholder='University'/>
          }
            {
                isSignup && 
                <TextField onChange={handleChange} value={input.program} name ='program' margin='normal' type={'text'} variant='outlined' placeholder='Program'/>
            }
            {
                isSignup && 
                <TextField onChange={handleChange} value={input.role} name ='role' margin='normal' type={'text'} variant='outlined' placeholder='Role'/>
            }
            
            <TextField onChange={handleChange} name ='email' value={input.email} margin='normal' type={'Email'} variant='outlined' placeholder='Email'/>
            <TextField onChange={handleChange} name ='password'  value={input.password} margin='normal' type={'Password'}  placeholder='Password'/>

            <Button endIcon={isSignup? <HowToRegIcon/> :<LoginIcon/>} type='submit' onClick={handleLogin } sx={{marginTop:3, borderRadius:3}} variant='contained'>
                {isSignup?"SignUp":"Login"}
            </Button>

            <Button endIcon={isSignup? <LoginIcon/> : <HowToRegIcon/>} onClick={handleRegister} sx={{marginTop:3, borderRadius:3}}>
             Change to {isSignup ? "Login":"SignUp"}
            </Button>

          </Box>
        </form>
    </div>
  );
}

export default Auth;
