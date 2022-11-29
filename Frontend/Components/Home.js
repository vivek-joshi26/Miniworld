import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import Provider_login from "./Provider_login";


function Home(){
    const [loginType, setLoginType] = useState("Student_Login")

    useEffect(()=>{
        console.log("Home page rendered");
      },[])

      const changeHandlerLoginType = (e)=>{
        console.log(e.target.value);
        setLoginType(e.target.value);
      }

      return(
        <div>
        <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
            <p style={{fontSize: '2rem'}}> <center><h1 class="font-weight-light">Scholarship Application </h1></center></p>
            <div>
        
        <Box sx={{ maxWidth: 150 , marginLeft:5}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Login</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={loginType}
            label="Login"
            onChange={changeHandlerLoginType}
          >
            <MenuItem defaultChecked value="Auth">Student_Login</MenuItem>
            <MenuItem value="Provider_login">Provider_login </MenuItem>
          </Select>
        </FormControl>
        </Box>
      </div>
              <p>
                {
                  (loginType  === "Auth") ? <Auth/> :<Provider_login/>
                }
              </p>
            </div>
          </div>
        </div>
      </div> </div>

      )
}

export default Home;