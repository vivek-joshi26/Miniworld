import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import AlertModal from "../common/Alert";
import axios from "axios";
const theme = createTheme();

export const SignUp = () => {
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

 
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  
  const [isPopUp, setPopUp] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);



  const isRequiredPresent = () => {
    if (fullName !== "" && email !== "") return true;
    else {
      showPopUp("full Name and email are required");
      return false;
    }
  };



  const onDefaultSignUp = (event) => {
    console.log("**************** Inside onDefaultSignUp **********************8")
    //localStorage.setItem('isAuth',false)
    event.preventDefault();
    console.log(email, fullName, account, password, university, program)
    // if (!isScreenNameValid()) return;
    if (!isRequiredPresent()) return;
    axios
      .post("http://localhost:8000/users/register", {
        emailId: email,
        name: fullName,
        role: account,
       
        password: password,
        university: university,
        program: program
       
     
      })
      .then((res) => {
        // localStorage.setItem("persona", JSON.stringify(account));
        // localStorage.setItem("email", JSON.stringify(email));
        if (res.status == 200) {
            console.log("**************** Inside onDefaultSignUp -> res **********************8")
          localStorage.setItem('authProvider','LOCAL')
          navigate(`/`);
        }
        console.log("**************** Inside onDefaultSignUp -> out res **********************8 " + res.status)
      })
      .catch((err) => {
        console.log("**************** Inside onDefaultSignUp -> err **********************8")
        console.log("in catch", err);
        //showPopUp("Error signin up");
        showPopUp(`${err?.response?.data}`);
      });
  };



  const showPopUp = (msg) => {
    setPopUpVal();
    setErrMsg(msg);
  };

  const setPopUpVal=()=>{
    setPopUp(!isPopUp);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {isPopUp && <AlertModal open={isPopUp} msg={errMsg} modal={setPopUpVal}/>}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  disabled={disabled}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
             
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Grid>
       

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="fullName"
                  label="Full Name"
                  type="fullName"
                  id="fullName"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ minWidth: 400 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Account Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={account}
                    onChange={(e) => {
                      setAccount(e.target.value);
                    }}
                    sx={{ minWidth: 400 }}
                    label="Account Type"
                  >
                    <MenuItem value={"Student"}>Student</MenuItem>
                    <MenuItem value={"Provider"}>Provider</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {account=="Student" &&(
                <>
                <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="university"
                  label="University"
                  type="university"
                  id="university"
                  onChange={(e) => {
                    setUniversity(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="program"
                  label="Program"
                  type="program"
                  id="program"
                  onChange={(e) => {
                    setProgram(e.target.value);
                  }}
                />
              </Grid>
              </>
              )}
              <Grid item xs={12}>
                <InputLabel id="address"></InputLabel>
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="street"
                  label="Street"
                  type="street"
                  id="street"
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="City"
                  type="city"
                  id="city"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="state"
                  label="State"
                  type="state"
                  id="state"
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="zip"
                  label="Zip Code"
                  type="zip"
                  id="zip"
                  onChange={(e) => {
                    setZip(e.target.value);
                  }}
                />
              </Grid> */}
            </Grid>
            {!disabled && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onDefaultSignUp}
              >
                Sign Up
              </Button>
            )}
           
          </Box>
       

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
