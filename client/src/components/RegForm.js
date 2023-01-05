import React, { useState } from 'react'
import styles from './styles.module.css'

const RegForm = (props) => {
    const {initFName, initLName, initPhone, initBD, initEmail, initPass, initConfirm, onSubmitProp, errors, submitValue} = props
    //form information
    const [firstName, setFirstName] = useState(initFName)
    const [lastName, setLastName] = useState(initLName)
    const [phone, setPhone] = useState(initPhone)
    const [birthday, setBirthday] = useState(initBD)
    const [email, setEmail]= useState(initEmail)
    const [password, setPassword] = useState(initPass)
    const [confirm, setConfirm] = useState(initConfirm)

    const handleSubmit = (e)=>{
        e.preventDefault()
        onSubmitProp({firstName, lastName, phone, birthday, email, password, confirm});
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit} className={styles.center} >
                <div className='col-6 ' >        
                    <div className='form-group'>
                        <label className='text-white'>First Name:</label>
                        <input type="text" className='form-control' name='firstName' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                        {errors.firstName? <p className='text-dark'> {errors.firstName.message} </p>: ""}
                    </div>

                    <div className='form-group'>
                        <label className='text-white mt-3'>Last Name:</label>
                        <input type="text" className='form-control' name='lastName'onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                        {errors.lastName? <p className='text-dark'> {errors.lastName.message} </p>: ""}
                    </div>

                    <div className='form-group'>
                        <label className='text-white mt-3'>Phone Number:</label>
                        <input type="text" className='form-control' name='phone'onChange={(e)=>setPhone(e.target.value)} value={phone} />
                        {errors.phone? <p className='text-dark'> {errors.phone.message} </p>: ""}
                    </div>

                    {/* <div className='form-group d-flex align-items-center justify-content-center mt-3'>
                        <label for="gender" className='text-white'>Your gender is:</label>
                        <div>
                            <select name="gender" id="gender" >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div> */}

                    <div className='form-group'>
                        <label className='text-white mt-3'>Birthday:</label>
                        <input type="date" className='form-control' name='birthday'onChange={(e)=>setBirthday(e.target.value)} value={birthday} />
                        {errors.birthday? <p className='text-dark'> {errors.birthday.message} </p>: ""}
                    </div>

                    <div className='form-group'>
                        <label className='text-white mt-3'>Email:</label>
                        <input type="email" className='form-control' name='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
                        {errors.email? <p className='text-dark'> {errors.email.message} </p>: ""}
                    </div>

                    <div className='form-group'>
                        <label className='text-white mt-3'>Password:</label>
                        <input type="password" className='form-control' name='password'onChange={(e)=>setPassword(e.target.value)} value={password} />
                        {errors.password? <p className='text-dark'> {errors.password.message} </p>: ""}
                    </div>

                    <div className='form-group'>
                        <label className='text-white mt-3'>Confirm Password:</label>
                        <input type="password" className='form-control' name='confirm'onChange={(e)=>setConfirm(e.target.value)} value={confirm} />
                        {errors.confirm? <p className='text-dark'> {errors.confirm.message} </p>: ""}
                    </div>

                        <input type="submit" value={submitValue} className='btn btn-primary mt-3'/>
                </div>
                <div>
                    <img src='../../img/pills2.jpg' className='rounded  col-8 shadow mt-4'></img>
                </div>
            </form>
        </div>
    )
}

export default RegForm