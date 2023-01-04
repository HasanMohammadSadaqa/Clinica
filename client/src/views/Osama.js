import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import  { useNavigate } from 'react-router-dom'
import YourAppointments from './YourAppointments'



const Osama = () => {
    const [LoggedInUser, setLoggedInUser] = useState({})
    const navigate =useNavigate()


    useEffect(() => {


        
        axios.get("http://localhost:8000/api/user/loggedIn", { withCredentials: true })
            .then(res => {
                console.log(res)
                console.log("hiiiiiiiiiiiiiiiiiiiiii")
                setLoggedInUser(res.data.loggedUser)
                // navigate("/yourAppointments");


            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <YourAppointments userId={LoggedInUser._id}/>
        </div>
    )
}

export default Osama