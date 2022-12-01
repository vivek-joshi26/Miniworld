import React, { useEffect, useState } from "react";
import axios from "../common/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AlertModal from "../common/Alert";
import InputLabel from "@mui/material/InputLabel";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Alert from '@mui/material/Alert';

import { ScholarshipApplicationCard } from "../components/ScholarshipApplicationCard";
const theme = createTheme();
export const MyAppliedScholarships = () => {
//   const userCity = localStorage.getItem('city') || null;
  const [search, setSearch] = useState(null);
  

  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [showNoData, setNoData] = useState(false)

  const [isPopUp, setPopUp] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const setPopUpVal = () => {
    setPopUp(!isPopUp);
  };
  const showPopUp = (msg) => {
    setPopUpVal();
    setErrMsg(msg);
  };

  useEffect(() => {
    
    setEvents(eventData);
  }, [eventData])


  const validateFormValues = () => {

    // if (!city && !startDateTime && !endDateTime && !status && !keyword && !organizer) {
    //   showPopUp("Set atleast 1 filter value");
    //   return false;
    // }

    // if (startDateTime && endDateTime && startDateTime >= endDateTime) {
    //   showPopUp("Start Time shouldn't be later than End Time");
    //   return false;
    // }
    // if (city && !isNaN(city)) {
    //   showPopUp("City shouldn't contain Number");
    //   return false;
    // }

    return true;
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateFormValues()) return;
    const obj = {
     params :{
      search: search,
      page : 1,
      limit: 20
    //   screenName: organizer,
    //   startDateTime: moment(startDateTime).format('YYYY-MM-DD HH:mm'),
    //   endDateTime: endDateTime ? moment(endDateTime).format('YYYY-MM-DD HH:mm') : null,
        }
    };

    //{ params: { page: 1, limit: 4 } }
    axios
      .get("http://localhost:8000/scholarships/apply/" + localStorage.getItem("user_id"))
      .then((res) => {
        if (res.status == 200) {
            console.log("********************* " + res.data)
          setEventData([])
          // setEvents(null)
          if (res.data.applications.length > 0) {
            setEventData([...res.data.applications])
            console.log("********************* Inside if(res.data.results > 0)" )
            setNoData(false)
          }
          else{
            setNoData(true)
          }

        }
      })
      .catch((err) => {
        console.log("in catch", err);
        showPopUp(`${err?.response?.data}`);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ContentPasteSearchOutlinedIcon />
          </Avatar>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isPopUp && (
            <AlertModal open={isPopUp} msg={errMsg} modal={setPopUpVal} />
          )}
          <Grid container spacing={1}>
            {/* <Grid item xs={5} md={3} lg={1.5}>
              <TextField
                fullWidth
                id="search"
                label="Text Search Input"
                name="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </Grid> */}
            {/* <Grid item xs={5} md={3} lg={1.5}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="status-small">Status</InputLabel>
                <Select
                  labelId="status-small"
                  id="status-small"
                  value={status}
                  label="Status"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <MenuItem value={"ACTIVE"}>Active</MenuItem>
                  <MenuItem value={"OPEN"}>Open for Registration</MenuItem>
                  <MenuItem value={"ALL"}>All</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
            {/* <Grid item xs={5} md={3} lg={1.5}>
              <TextField
                fullWidth
                id="program"
                label="Program"
                name="program"
                value={program}
                onChange={(e) => {
                  setProgram(e.target.value);
                }}
              />
            </Grid> */}
            {/* <Grid item xs={5} md={3} lg={1.5}>
              <TextField
                fullWidth
                id="organizer"
                label="Organizer"
                name="organizer"
                value={organizer}
                onChange={(e) => {
                  setOrganizer(e.target.value);
                }}
              />
            </Grid> */}
            {/* <Grid item xs={5} md={3} lg={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Start Time"
                  value={startDateTime}
                  onChange={(newValue) => {
                    setStartDateTime(newValue);
                  }}
                  minDateTime={new Date()}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={5} md={3} lg={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="End Time"
                  value={endDateTime}
                  onChange={(newValue) => {
                    setEndDateTime(newValue);
                  }}
                  minDateTime={startDateTime}
                />
              </LocalizationProvider>
            </Grid> */}

            <Grid item xs={5} md={3} lg={1} sx={{ display: "inherit" }}>
              <Button
                type="submit"
                variant="contained"

              // onClick={onDefaultSignIn}
              > Show My Applications
               
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={3}>
            {
              events.map((event, i) => (
                <Grid item xs={8} md={3} lg={4}>
                  <ScholarshipApplicationCard key={i} data={event} />
                </Grid>
              ))
            }


          </Grid>
        </Box>
        <div>
          {

            showNoData && (
              <Alert severity="warning">No Scholarships Search Result</Alert>
            )

          }
        </div>
      </Container>
    </ThemeProvider>
  );
};
