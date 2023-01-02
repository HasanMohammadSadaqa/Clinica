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
                if(res.config.data  == 
                    "{\"email\":\"hasan@gmail.com\",\"password\":\"123456789\"}"){
                        navigate(`/admin`)
                    }
                else if(res.data.msg == "success!"){
                    navigate(`/Home`)
                }else{
                    setErrors(res.data.msg)
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }

    // const goToRegistration = ()=>{
    //     navigate(`/user/registration`);
    // }
    return (
        <div>
            <LoginForm initEmail="" initPassword="" onSubmitLoginProp={login} errors={errors} />
        </div>
    )
}

export default Login