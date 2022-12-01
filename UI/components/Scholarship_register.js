import React, { useState } from 'react';
import axios from "axios";



function Scholarship_register(){
    const url = ""

    const[data,setData] = useState({
        createrId:"",
        name:"",
        description:"",
        university:"",
        university:"",
        program:"",
        scholarshipAmount:"",
    })
    
    // const handleChange = (e) => {
    //     setInput((prevState)=> ({
    //         ...prevState,
    //         [e.target.name] : e.target.value
    //     }))
    // }

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            createrId: data.createrId,
            name:data.name,
            description:data.description,
            university:data.university,
            program:data.program,
            scholarshipAmount:data.scholarshipAmount
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
            <input onChange={(e)=>handle(e)} value={data.createrId} placeholder='createrid' type='text'></input><br/><br/>
            <input onChange={(e)=>handle(e)} value={data.name} placeholder='name' type='text'></input><br/><br/>
            <input onChange={(e)=>handle(e)} value={data.description} placeholder='desc' type='text'></input><br/><br/>
            <input onChange={(e)=>handle(e)} value={data.university} placeholder='university' type='text'></input><br/><br/>
            <input onChange={(e)=>handle(e)} value={data.program} placeholder='program' type='text'></input><br/><br/>
            <input onChange={(e)=>handle(e)} value={data.scholarshipAmount} placeholder='amount' type='text'></input><br/><br/>
            <button>submit</button>
            </form>

        </div>
    )

}

export default Scholarship_register