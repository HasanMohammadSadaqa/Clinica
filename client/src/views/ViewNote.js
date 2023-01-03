import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FormComp from '../components/FormComp'

const Details = (props) => {
    const { onSubmitProp, errors } = props

  return (
    <div>
        <PatientNav />

    </div >
  )
}

export default Details