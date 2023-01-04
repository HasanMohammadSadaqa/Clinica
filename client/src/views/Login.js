import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'



const Login = (props) => {
    const {loginUserAdmin, loginErrors} = props

    return (
        <div>
            <LoginForm initEmail="" initPassword="" onSubmitLoginProp={loginUserAdmin} errors={loginErrors} />
        </div>
    )
}


export default Login