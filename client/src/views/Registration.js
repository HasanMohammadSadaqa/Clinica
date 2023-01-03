import React, { useState } from 'react'
import RegForm from '../components/RegForm'


const Registration = (props) => {

    const {registerNewUser, registrationErrors}= props
    return (
        <div>
            <h1 className='col-6'>Registration Form</h1>
            <RegForm initFName="" initLName="" initPhone="" initBD = "" initEmail="" initPass="" initConfirm=""
            onSubmitProp={registerNewUser} errors={registrationErrors} />
        </div>
    )
}

export default Registration
//test comment