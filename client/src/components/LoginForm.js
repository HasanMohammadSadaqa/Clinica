import React, { useState } from 'react'

const LoginForm = (props) => {
    const { initEmail, initPassword, onSubmitLoginProp, errors } = props
    const [email, setEmail] = useState(initEmail)
    const [password, setPassword] = useState(initPassword)

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        onSubmitLoginProp({ email, password });
    }
    return (
        <div>
            <h1 className='col-6'>Login Form</h1>
            {errors ? <p className='text-danger col-6'>{errors}</p> : ""}
            <form onSubmit={handleLoginSubmit}>
                <div className='col-6'>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input type="email" className='form-control' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input type="password" className='form-control' name='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <input type="submit" value="Login" className='btn btn-primary' />
                </div>
            </form>
        </div>
    )
}

export default LoginForm