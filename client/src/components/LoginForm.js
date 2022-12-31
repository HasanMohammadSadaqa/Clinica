import React, { useState } from 'react'

const LoginForm = (props) => {
    const {initEmail, initPw, onSubmitLoginProp} = props
    const [email, setEmail] = useState(initEmail)
    const [pw, setPw] = useState(initPw)

    const handleLoginSubmit = (e)=>{
        e.preventDefault()
        onSubmitLoginProp({email, pw})
    }
    return (
        <div>
            <h1 className='col-6'>Login Form</h1>
            <form onSubmit={handleLoginSubmit}>
                <div className='col-6'>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input type="email" className='form-control' name='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        {/* {errors.firstName? <p className='text-danger'> {errors.firstName.message} </p>: ""} */}
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input type="password" className='form-control' name='password' onChange={(e)=>setPw(e.target.value)} value={pw}/>
                        {/* {errors.firstName? <p className='text-danger'> {errors.firstName.message} </p>: ""} */}
                    </div>
                    <input type="submit" value="Login" className='btn btn-primary'/>
                </div>
            </form>
        </div>
    )
}

export default LoginForm