import React, { useEffect, useState } from 'react'
import axios from 'axios'


import { PatientNav } from "../components/PatientNav";






const UserProfile = (props) => {
  const { userLogOut } = props
  const [LoggedInUser, setLoggedInUser] = useState("")


  //method to get a logged in user and catch it by id
  useEffect(() => {
    axios.get("http://localhost:8000/api/user/loggedIn", { withCredentials: true })
      .then(res => {
        console.log(res)
        console.log("hiiiiiiiiiii")
        setLoggedInUser(res.data.loggedUser)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <div>
        <PatientNav userLogOut={userLogOut} />
        <h1>Welcome {LoggedInUser.firstName} </h1>
        <h3>Your B.D is {LoggedInUser.birthday}</h3>
        {/* <button onClick={logOut}>Log Out!</button> */}
      </div>
    </div>
  )
}

export default UserProfile