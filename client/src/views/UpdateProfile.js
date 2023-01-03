import React, { useState } from 'react'
import RegForm from '../components/RegForm'
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'

const UpdtaeProfile = (props) => {
    // const [users, setUsers] = useState([])
    const [errors, setErrors] = useState([]);
    const navigate =useNavigate()

    const register = (newUser)=>{
        axios.post("http://localhost:8000/api/register", newUser,{withCredentials: true})
            .then(res =>{
                console.log(res);
                if(res.data.errors){
                    setErrors(res.data.errors)
                }else{
                    navigate("/Home");
                }
            })
            .catch(err=> console.log(err))
    }
    return (
        <div>
            <h1 className='col-6'>Update Profile:</h1>
            <RegForm initFName="" initLName="" initPhone="" initBD = "" initEmail="" initPass="" initConfirm=""
            onSubmitProp={register} errors={errors} />
        </div>
    )
}

export default UpdtaeProfile
//test comment