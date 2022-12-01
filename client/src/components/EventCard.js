import React, { useEffect, useState } from "react";

import { Navigate, useNavigate, useParams } from "react-router-dom";

import EventBusyIcon from "@mui/icons-material/EventBusy";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

export const EventCard = (props) => {

  const [name, setName] = useState(props.data.name);
  const [description, setDescription] = useState(props.data.description);
  const [university, setUniversity] = useState(props.data.university);
  const [program, setProgram] = useState(props.data.program);
  const [amount, setAmount] = useState(props.data.scholarshipAmount);
  //   const [deadline, setDeadline] = useState(props.data.deadline);
  //   const [fee, setFee] = useState(props.data.fee);
  //   const [admPolicy, setAdmPolicy] = useState(props.data.admissionPolicy);
  //   const [errorMsg, setErrorMsg] = React.useState(null);
  //   const [eventId, setEventId] = React.useState(props.data.id);

 
  const isSearchPage = window.location.pathname.includes("search-event");
  // const [paid, setHasPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(props);
  }, [props]);

  // const hasDeadlinePassed = () => {
  //   console.log( moment(deadline).format("LLL") +" "+ moment(new Date()).format("LLL"))
  //   return new Date(deadline) < new Date()
  // };

 
  // const [open, setOpen] = React.useState(false);
  const handleDetail = () => {
    // setOpen(true);

    localStorage.setItem("eventDetails", JSON.stringify(props));
    navigate("detail");
  };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const setPaid = () => {
  //   setHasPaid(true);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!paid && fee && fee > 0) {
  //     setErrorMsg("You need to approve your willingness to pay first");
  //     return;
  //   } else {
  //     setErrorMsg(null);
  //   }
  //   const obj = {
  //     userId: parseInt(localStorage.getItem("userId")),
  //     eventId: eventId,
  //   };

  //   axios
  //     .post("/participate", obj)
  //     .then((res) => {
  //       if (res.status >= 200) {
  //         setErrorMsg(
  //           `Thank you for registering your interest!    Your Approval status is ${res.data.approvalStatus}!`
  //         );
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("in catch", err);
  //       setErrorMsg(err.response.data);
  //     });
  // };
  return (
    <>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography
            sx={{
              mb: 1.5,
              display: "flex",
              flexDirection: "row ",
              justifyContent: "space-between",
            }}
            color="text.primary"
            gutterBottom
          >
            <div> <b> Name:</b> {name}</div>
            {/* {(
              <Tooltip title="Event is Full" placement="top-start">
                <EventBusyIcon />
              </Tooltip>
            )} */}
          </Typography>
          <hr />
          {/* <Typography sx={{ fontSize: 14 }} component="div">
            Time: {moment(startDateTime).format("LLL")} -{" "}
            {moment(endDateTime).format("LLL")}
          </Typography> */}
          {description && (
            <Typography sx={{ fontSize: 14 }} color="text.primary">
             <b> Description: </b>{description}
            </Typography>
          )}
           <hr />
          {university && (
            <Typography variant="body2"> <b>University: </b>{university}</Typography>
          )}
           <hr />
          {program && <Typography variant="body2"> <b>Program:  </b>{program}</Typography>}
          <hr />
          {amount && <Typography variant="body2">  <b>Scholarship Amount:  </b>{amount}</Typography>}
        </CardContent>
        {isSearchPage ? (
          <CardActions>
            <Button size="small" onClick={handleDetail}>
              Learn More
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            <Button size="small" onClick={handleDetail}>
              Apply
            </Button>
          </CardActions>
        )}
      </Card>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <h3 id="parent-modal-title"> Title: {title}</h3>
          <p id="parent-modal-description">Description: {description}</p>
          <div>Status: {status}</div>
          <div>Max. Participants: {maxParticipants}</div>
          <div>Min. Participants: {minParticipants}</div>
          <div>Total Participants: {totalParticipants}</div>
          <div>City: {city}</div>
          {fee && fee > 0 && (
            <ChildModal
              fee={fee}
              policy={admPolicy}
              setPaid={setPaid}
              paid={paid}
            />
          )}

          {!hasDeadlinePassed() && isEventNotFull() && (
            <Button size="small" variant="contained" onClick={handleSubmit}>
              Sign Up
            </Button>
          )}
          <br />
          <div sx={{ fontSize: 7 }}>{errorMsg}</div>
        </Box>
      </Modal> */}
    </>
  );
};
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 800,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };
// function ChildModal(props) {
//   const [open, setOpen] = React.useState(false);
//   const [disabled, setDisabled] = React.useState(true);
//   const [creditCard, setcreditCard] = React.useState(null);
//   const handleOpen = () => {
//     if (!props.paid) setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handlePay = (e) => {
//     setcreditCard(e.target.value);
//     setDisabled(false);
//     props.setPaid();
//   };
//   return (
//     <React.Fragment>
//       {!props.paid && (
//         <Button onClick={handleOpen} variant="outlined" sx={{marginRight:3}}>Are you willing to pay?</Button>
//       )}
//       {props.paid && (
//         <div>
//           <b>You have Paid, Now Sign Up by clicking below!</b>
//         </div>
//       )}

//       <Modal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="pay-modal-title"
//         // aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 700 }}>
//           <h4 id="pay-modal-title">Fee: ${props.fee}</h4>
//           {props?.policy === "auto-approved" && <div>Pay to Sign Up Now</div>}
//           {props?.policy === "first-come-first-served" && (
//             <div>
//               You will be only charged upon approval by organizer, but{" "}
//               <b>Approve Pay</b> to enroll once the aproval is done!
//             </div>
//           )}
//           <div>Pls enter your credit card details!</div>
//           <TextField
//             id="outlined-basic"
//             label="Credit Card Number"
//             variant="outlined"
//             onChange={handlePay}
//           />

//           <Button onClick={handleClose} disabled={disabled}>
//             Approve Pay
//           </Button>
//           <div>
//             Note: This doesn't guarantee your <b>Sign Up</b> for the event!
//           </div>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }
