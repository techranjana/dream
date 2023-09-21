import axios from "axios";
import React from 'react'
import { useState } from "react";

function PostAxios()
 {
    const data={fname:"",lastname:""};
    const [inputData,setInputdata]=useState(data)
    const handleData=(e)=>{
        setInputdata({...inputData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((Response) => {
          console.log(Response);
        })
        .catch((error) => {
          console.error("Axios Error:", error);
        });
      

        }   
  return (
    <div>
        <label> name: </label>
        <input type="text" name='fname' value={inputData.fname}onChange={handleData}></input><br/><br/>
        <label> fname: </label>
        <input type="text" name='lastname' value={inputData.lastname}onChange={handleData}></input><br/><br/>
        <button onClick={handleSubmit}>submit</button>

    </div>
  )
}

export default PostAxios;