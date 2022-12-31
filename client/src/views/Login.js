import axios from 'axios'
import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import  { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [loggedUser, setLoggedUser]= useState({})
    const [errors, setErrors]=useState("")

    const navigate =useNavigate()
    
    const login = (loggedInUser)=>{
        axios.post("http://localhost:8000/api/login", loggedInUser, {withCredentials: true})
            .then(res=>{
                console.log(res);
                navigate(`/Home`)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return (
        <div>
            <LoginForm initEmail="" initPw="" onSubmitLoginProp={login} />
        </div>
    )
}

export default Login