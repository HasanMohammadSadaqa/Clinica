import React, { useState } from 'react'
import styles from './styles.module.css'

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

            <h3 className='col-12 text-center m-3'>Login To Your Account</h3>
            {/* {errors ? <p className='text-danger col-6'>{errors}</p> : ""} */}

            <form onSubmit={handleLoginSubmit} className={styles.center}>
                <div className='col-6 mt-5'>
                    <div className='form-group'>
                        <label className='text-white'>Email:</label>
                        <input type="email" className='form-control' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                        {errors ? <p className='text-dark col-6'>{errors}</p> : ""}
                    </div>
                    <div className='form-group'>
                        <label className='text-white'>Password:</label>
                        <input type="password" className='form-control' name='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <input type="submit" value="Login" className='btn btn-primary mt-3' />
                    {/* <button className='btn btn-primary' onClick={registration}>Are you register?</button> */}
                    <div className='text-white mt-5'>
                        <a href='/user/registration'  className='text-white mt-3'>Don't have an Account yet?</a>
                    </div>
                </div>
                <div>
                    <img src='../../img/pills3.jpg' className='rounded  col-8 shadow'></img>
                </div>
            </form>
        </div>
    )
}

export default LoginForm