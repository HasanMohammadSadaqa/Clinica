import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import PatientNav from '../components/PatientNav'
import NoteForm from '../components/NoteForm'
import { useNavigate } from 'react-router-dom'

const ViewNote = (props) => {
    const navigate = useNavigate()
    const { onSubmitProp, errors } = props

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
            <h1>{}</h1>

    </div >
  )
}

export default ViewNote