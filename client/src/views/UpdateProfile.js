import React, { useEffect, useState } from 'react'
import RegForm from '../components/RegForm'
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'
import { DoctorNav } from '../components/DoctorNav'
import { useParams } from 'react-router-dom'

const UpdtaeProfile = (props) => {
    const [user, setUser] = useState([])
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false)




    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
      axios.get("http://localhost:8000/api/users/" + id)
        .then((res) => setUser(res.data))
        .then(() => setLoaded(true))
    }, [])
  
    const updateUser = (user) => {
      axios.put(`http://localhost:8000/api/users/${id}`, user)
        .then(() => navigate(`/yourAppointment/`+id))
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
            <RegForm initFName={user.firstNme} initLName={user.lastName} initPhone={user.phone} initBD={user.birthday} initEmail={user.email} initPass="" initConfirm="" initGender={user.gender}
            onSubmitProp={updateUser} errors={errors} />
        </div>
    )
}

export default UpdtaeProfile
//test comment