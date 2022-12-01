import React, { useState } from 'react';
import axios from "axios";
//scholarships/apply

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

function Apply_scholarship(){
    const url = "/scholarships/apply"

    const[data,setData] = useState({
        userId:"",
        scholarshipId:"",
        
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            userId: data.scholarshipId,
            scholarshipId:data.scholarshipId,
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        // newdata[e.target.id] = e.target.value
        setData({[e.target.id] : e.target.value})
        console.log(newdata)
    }

    const handleApplyScholarship = ()=>{
        const payload = {
            userId:data.userId,
            scholarshipId:data.scholarshipId
        }
        instance.post(url,payload)
        .then((res)=>{
            console.log(res);
            alert(`Scholarship applied for id# ${data.userId}`);
        })
    }
    return(
        <div>
            <form onSubmit={(e)=> submit(e)}>
            <input onChange={(e)=>handle(e)} value={data.userId} placeholder='UserID' type='text'></input><br/><br/>
            <input onChange={(e)=>handle(e)} value={data.scholarshipId} placeholder='ScholarshipId' type='text'></input><br/><br/>
            <button onClick={handleApplyScholarship}>submit</button>
            </form>

        </div>
    )
}

export default Apply_scholarship