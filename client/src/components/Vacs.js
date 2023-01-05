import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
const excludeElements = (arr1, arr2) => {
    return arr1.filter(element => !arr2.includes(element));
  };

const Vacs = (props) => {
    const { date } = useParams();
    const [LoggedInUser, setLoggedInUser] = useState({})

    const [...nums] =[...Array(10).keys()];
    const [responseData, setResponseData] = useState([]);
    const [ready, setReady] = useState(false);


    useEffect(() => {
      axios.get("http://localhost:8000/api/user/loggedIn", { withCredentials: true })
          .then(res => {
              setLoggedInUser(res.data.loggedUser)
          })
          .catch(err => {
              console.log(err);
          })
  }, [])



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
        console.log("http://localhost:8000/api/new/"+number+"/"+LoggedInUser._id,{date})
        axios.post("http://localhost:8000/api/new/"+number+"/"+LoggedInUser._id,{date})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        e.target.remove()
    }
    return (
      <div>
        <h1 className="text-left" style={{padding:"20ps", margin:"20px 20px"}}>Here is the available appointments:</h1>
        {responseData? responseData.map((number,i)=>
          <button key={i} style={{margin: "20px"}} onClick={(e)=>Book(e,number)}>
            {number+8}:00
          </button> ):" sorry there is no appointments available fot this day"
      }
      </div>
    );
}

export default Vacs