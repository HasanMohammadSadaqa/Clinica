import React, { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Allpatients from './AllPatients'
import Landing from './Landing'
import Today from './Today'
import OnePatient from './OnePatient'
import Note from './Note'
import Registration from './Registration';
import UserProfile from './UserProfile';
import Login from './Login';


const Main = () => {
    const navigate = useNavigate()

    //method to register new user
    const [users, setUsers] = useState([])
    const [registrationErrors, setRegistrationErrors] = useState([]);

    const userRegister = (newUser) => {
        axios.post("http://localhost:8000/api/register", newUser, { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.data.errors) {
                    setRegistrationErrors(res.data.errors)
                } else {
                    setUsers([...users, newUser])
                    navigate("/user/profile");
                }
            })
            .catch(err => console.log(err))
    }

    //method to login user/admin
    const [loggedUser, setLoggedUser] = useState({})
    const [loginErrors, setLoginErrors] = useState([])
    const login = (loggedInUser) => {
        axios.post("http://localhost:8000/api/login", loggedInUser, { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.config.data ==
                    "{\"email\":\"hasan@gmail.com\",\"password\":\"123456789\"}") {
                    // setLoggedUser([...loggedUser, loggedInUser])
                    navigate(`/today`)
                }
                else if (res.data.msg == "success!") {
                    // setLoggedUser([...loggedUser, loggedInUser])
                    navigate(`/user/profile`)
                } else {
                    setLoginErrors(res.data.msg)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    //method to logOut for the user or clear the cookie
    const userLogOut = (e) => {
        axios.get("http://localhost:8000/api/user/logout", { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate("/");
            })
            .catch(err => {
                console.log(err)
            })
    }

    //method to log out for admin
    const AdminLogOut = (e) => {
        axios.get("http://localhost:8000/api/user/logout", { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate("/");
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Routes>
            <Route path={`/`} element={<Landing />}></Route>
                <Route path={`/today`} element={<Today adminLogOut={AdminLogOut}/>}></Route>
                <Route path={`/allPatients`} element={<Allpatients />}></Route>
                <Route path={`/onePatient/`} element={<OnePatient />}></Route>
                <Route path={`/onePatient/`} element={<OnePatient />}></Route>
                <Route path={`/note/`} element={<Note />}></Route>


                <Route path={`/user/registration`} element={<Registration registerNewUser={userRegister} registrationErrors={registrationErrors} />} />
                <Route path={`/user/login`} element={<Login loginUserAdmin={login} loginErrors={loginErrors} />} />
                <Route path={`/user/profile`} element={<UserProfile userLogOut={userLogOut}/>} />
            </Routes>
        </div>
    )
}

export default Main