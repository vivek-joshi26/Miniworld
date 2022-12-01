import React, { useState } from 'react';
import axios from "axios";

function Update_scholarship(){
    const url = ""

    const[data,setData] = useState({
        userId:"",
        scholarshipId:"",
        status:"",
        scholarshipAmount:"" 
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            userId: data.scholarshipId,
            scholarshipId:data.scholarshipId,
            status:data.status,
            scholarshipAmount:data.scholarshipAmount,
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return(
        <div>
            <form onSubmit={(e)=> submit(e)}>
            <input onChange={(e)=>handle(e)} value={data.userId} placeholder='UserID' type='text'></input><br/><br/>
            <input onChange={(e)=>handle(e)} value={data.scholarshipId} placeholder='ScholarshipId' type='text'></input><br/><br/>
            <input onChange={(e)=>handle(e)} value={data.status} placeholder='Status' type='text'></input><br/><br/>
            <input onChange={(e)=>handle(e)} value={data.scholarshipAmount} placeholder='ScholarshipAmount' type='text'></input><br/><br/>
            <button>submit</button>
            </form>

        </div>
    )
}

export default Update_scholarship