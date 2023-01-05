import React, { useEffect, useState } from 'react'
import RegForm from '../components/RegForm'
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'
import { DoctorNav } from '../components/DoctorNav'
import { useParams } from 'react-router-dom'

const UpdtaeProfile = (props) => {
    const [user, setUser] = useState([])
    const [errors, setErrors] = useState([]);
    const [LoggedInUser, setLoggedInUser] = useState({})

    const [loaded, setLoaded] = useState(false)



const [userId, setUserId] = useState("")
    // const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/api/user/loggedIn", { withCredentials: true })
        .then(res => {
            setLoggedInUser(res.data.loggedUser)
           setUserId(res.data.loggedUser._id)
        })
        
        .catch(err => {
            console.log(err);
        })
    }, [])
  
    const updateUser = (LoggedInUser) => {
      axios.put(`http://localhost:8000/api/users/${userId}`, user)
        .then(() => navigate(`/yourAppointments`))
        .catch(err => {
          // console.log(err.response.data.err)
          // const errorValidator = err.response.data.err.message
          // setErrors(errorValidator);
          const errorResponse = err.response.data.errors; // Get the errors from err.response.data
          const errorArr = []; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
          }
          setErrors(errorArr);
        })
    }


    const logOut = (e) => {
        axios.get("http://localhost:8000/api/user/logout", { withCredentials: true })
            .then(res => {

                navigate("/");
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <DoctorNav onClickprop={logOut} />
            <h1 className='col-6'>Update Profile:</h1>
            <RegForm initFName={LoggedInUser.firstNme} initLName={LoggedInUser.lastName} initPhone={LoggedInUser.phone} initBD={LoggedInUser.birthday} initEmail={LoggedInUser.email} initPass="" initConfirm="" 
            onSubmitProp={updateUser} errors={errors} />
        </div>
    )
}

export default UpdtaeProfile
//test comment