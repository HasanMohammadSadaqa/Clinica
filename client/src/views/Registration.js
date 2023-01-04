import React, { useState } from 'react'
import RegForm from '../components/RegForm'
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'
import { Navigation } from "../components/navigation";

const Registration = (props) => {
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
                    navigate("/osama");

                    // navigate("/yourAppointments/"+id);
                }
            })
            .catch(err=> console.log(err))
    }
    return (
        <div>
            <h3 className='col-12 text-center m-3'>Registration</h3>
            <RegForm initFName="" initLName="" initPhone="" initBD = "" initEmail="" initPass="" initConfirm=""
            onSubmitProp={register} errors={errors} />
        </div>
    )
}

export default Registration
//test comment