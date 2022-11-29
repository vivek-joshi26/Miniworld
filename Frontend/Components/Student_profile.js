import React, { useEffect, useState } from 'react';
import {Box,Button,TextField,Typography} from '@mui/material';
import navigation from './Navigation';
import { Navigation } from '@mui/icons-material';


function Student(){
    const isAuth = true;
    const[name,setname] = useState('');
    const[age,setage] = useState('');
    const[studentid,setStudentid] = useState('');
    const[universityName,setUniversityName]= useState('');
    const[gpa,setGpa] = useState('');
    const[major,setMajor] = useState('');

    useEffect(()=>{

	},[])

	
    const changename = (event) => {
		setname(event.target.value);
	};   
    const changeage = (event) => {
		setage(event.target.value);
	};   
    const changeStudentid = (event) => {
		setStudentid(event.target.value);
	};   
    const changeUniversityName = (event) => {
		setUniversityName(event.target.value);
	};  
    const changegpa = (event) => {
		setGpa(event.target.value);
	}; 
    const changemajor = (event) => {
		setMajor(event.target.value);
	}; 

    const transferValue = (event) => {
		event.preventDefault();
		const val = {
            name,
            age,
			studentid,
			universityName,
			gpa,
			major,
		};

		clearState();
	};

    const clearState = () => {
        setname('');
        setage('');
		setStudentid('');
		setUniversityName('');
		setGpa('');
		setMajor('');
	};
    const redirectHome = ()=>{
		 navigation("/")
	}
    
return(
    <div> 
        {
            isAuth ? <>
				<Navigation/>
				<Typography variant='h2' padding={3} textAlign="center"> Student Profile</Typography>

                <TextField  name ='name'  margin='normal' type={'text'} variant='outlined' placeholder='Name'/><br/>
                <TextField  name ='age'  margin='normal' type={'text'} variant='outlined' placeholder='Age'/><br/>
				<TextField  name ='studentid'  margin='normal' type={'text'} variant='outlined' placeholder='StudentID'/><br/>
				<TextField  name ='universityName'  margin='normal' type={'text'} variant='outlined' placeholder='UniversityName'/><br/>
				<TextField  name ='GPA'  margin='normal' type={'text'} variant='outlined' placeholder='GPA'/><br/>
				<TextField  name ='Major'  margin='normal' type={'text'} variant='outlined' placeholder='Major'/><br/>
				<Button onClick={transferValue} variant='contained' sx={{marginTop:3, borderRadius:3}} > <b>submit</b></Button></> : redirectHome()

        }
    </div>
)
}

export default Student;