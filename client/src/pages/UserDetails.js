import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Typography from '@mui/material/Typography';

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const UserDetails = () => {
    const { emailId } = useParams();
    const [name, setName] = useState(localStorage.getItem('name') || "")
    const [email, setEmaile] = useState(localStorage.getItem('email') || "")
    const [university, setUniversity] = useState(localStorage.getItem('university') || "")
    const [program, setProgram] = useState(localStorage.getItem('program') || "")
    const [gpa, setGpa] = useState(localStorage.getItem('gpa') || "")
    // const [state, setState] = useState(localStorage.getItem('state') || "")

    useEffect(() => {
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Card sx={{ width: "60%", borderRadius: "2%", mt:4 }} variant="outlined">
                <CardContent>
                    {/* <Typography
                        sx={{
                            mb: 1.5,
                            display: "flex",
                            flexDirection: "row ",
                            justifyContent: "space-between",
                        }}
                        color="text.primary"
                        gutterBottom
                    > */}
                        {name && (
                            <Typography sx={{ fontSize: 14,display: 'flex',
                            justifyContent: 'flex-start', alignItems: 'center'}} color="text.primary">
                                <AccountCircleIcon/>
                                <div style={{fontSize: 'large', fontWeight: 'bold', marginLeft:'1rem'}}>{name}</div>
                            </Typography>
                    // </Typography>
                     )}

                    {university && (
                        <Typography sx={{ fontSize: 14,display: 'flex',
                        justifyContent: 'flex-start', alignItems: 'center',marginLeft:'2.5rem'}} color="text.primary">
                            <h4>University</h4>
                            <div style={{marginLeft:'1rem'}}> {university}</div>
                        </Typography>
                    )}
                    {program && (
                        <Typography variant="body2" sx={{ fontSize: 14,display: 'flex',
                            justifyContent: 'flex-start', alignItems: 'center',marginLeft:'2.5rem'}}>
                             <h4>Program</h4>
                            <div style={{marginLeft:'1rem'}}> {program}</div>
                        </Typography>
                    )}
                     {gpa && (
                        <Typography variant="body2" sx={{ fontSize: 14,display: 'flex',
                        justifyContent: 'flex-start', alignItems: 'center',marginLeft:'2.5rem'}}>
                              <h4>GPA</h4>
                            <div style={{marginLeft:'1rem'}}> {gpa}</div>
                        </Typography>
                    )}
                    
                    {/* {screenName && (
                        <Typography variant="body2" sx={{ fontSize: 14,display: 'flex',
                        justifyContent: 'flex-start', alignItems: 'center',marginLeft:'2.5rem'}}>
                              <h4>Screen Name</h4>
                            <div style={{marginLeft:'1rem'}}> {screenName}</div>
                        </Typography>
                    )}  */}
                    {email && (
                        <Typography variant="body2" sx={{ fontSize: 14,display: 'flex',
                        justifyContent: 'flex-start', alignItems: 'center',marginLeft:'2.5rem'}}>
                              <h4>Email</h4>
                            <div style={{marginLeft:'1rem', color:'blue'}}> {email}</div>
                        </Typography>
                    )}
                </CardContent>


            </Card>
        </div>
    );
};
