import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const [LoggedInUser, setLoggedInUser] = useState("")
  const navigate =useNavigate()


  //method to get a looged in user and catch it by id
  useEffect(()=>{
    axios.get("http://localhost:8000/api/user/loggedIn", {withCredentials: true})
      .then(res=>{
        console.log(res)
        console.log("hiiiiiiiiiii")
        setLoggedInUser(res.data.loggedUser)
      })
      .catch(err=>{
        console.log(err)
      })
  }, [])

  //method to log out by clear the cookie
  const logOut = (e)=>{
    axios.get("http://localhost:8000/api/user/logout", {withCredentials: true})
      .then(res=>{
        console.log(res)
        navigate("/");
      })
      .catch(err=>{
        console.log(err)
      })
  }
  return (
    <div>
      <div>
        <h1>Welcome {LoggedInUser.firstName} </h1>
        <h3>Your B.D is {LoggedInUser.birthday}</h3>
        <button onClick={logOut}>Log Out!</button>
      </div>
    </div>
  )
}

export default LandingPage