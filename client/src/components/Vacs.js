import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
const excludeElements = (arr1, arr2) => {
    return arr1.filter(element => !arr2.includes(element));
  };

const Vacs = (props) => {
    const { date } = useParams();
    const [...nums] =[...Array(10).keys()];
    const [responseData, setResponseData] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(()=>{
            axios.post('http://localhost:8000/api/appointments/date',{date})
            .then(response=>{
            console.log(response)
            const hours=response.data.map(appts=>appts.hour);
            const num=excludeElements(nums,hours)
            setResponseData(num)
            setReady(true)
            }).catch(err=>console.log(err))
    }, [date]); 

    const Book=(e,number)=>{
        console.log("http://localhost:8000/api/new/"+number+"/63b316da49bd9c59f5e2a276",{date})
        axios.post("http://localhost:8000/api/new/"+number+"/63b316da49bd9c59f5e2a276",{date})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        e.target.remove()
    }
    return (
      <div style={{color: "blue"}}>
        {date}
        {ready && responseData.map((number,i)=>
            <button key={i} onClick={(e)=>Book(e,number)}>
                {number+8}:00
            </button>
        )}
      </div>
    );
}

export default Vacs