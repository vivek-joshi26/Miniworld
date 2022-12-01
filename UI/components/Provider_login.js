import React, { useState } from 'react';
import {Box,Button,TextField,Typography} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

function Provider_login(){
    return(
        <div>
        <form >
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
            

            <Typography variant='h2' padding={3} textAlign="center"> Login</Typography>
         

            <TextField  name ='email'  margin='normal' type={'Email'} variant='outlined' placeholder='Email'/>
            <TextField  name ='password' margin='normal' type={'Password'}  placeholder='Password'/>

            <Button endIcon={<LoginIcon/>} type='submit' sx={{marginTop:3, borderRadius:3}} variant='contained'>
                Login
            </Button>

          </Box>
        </form>
    </div>
    )
}

export default Provider_login;