import React, { useState } from 'react'

const RegForm = (props) => {
    const {initFName, initLName, initPhone, initBD, initEmail, initPass, initConfirm, onSubmitProp, errors} = props
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
            <h1 className='col-6'>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='col-6' >        
                    <div className='form-group'>
                        <label>First Name:</label>
                        <input type="text" className='form-control' name='firstName' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                        {errors.firstName? <p className='text-danger'> {errors.firstName.message} </p>: ""}
                    </div>
                    <div className='form-group'>
                        <label>Last Name:</label>
                        <input type="text" className='form-control' name='lastName'onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                        {errors.lastName? <p className='text-danger'> {errors.lastName.message} </p>: ""}

                    </div>
                    <div className='form-group'>
                        <label>Phone Number:</label>
                        <input type="text" className='form-control' name='phone'onChange={(e)=>setPhone(e.target.value)} value={phone} />
                        {errors.phone? <p className='text-danger'> {errors.phone.message} </p>: ""}

                    </div>
                    <div className='form-group'>
                        <label>Birthday:</label>
                        <input type="date" className='form-control' name='birthday'onChange={(e)=>setBirthday(e.target.value)} value={birthday} />
                        {errors.birthday? <p className='text-danger'> {errors.birthday.message} </p>: ""}

                    </div>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input type="email" className='form-control' name='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
                        {errors.email? <p className='text-danger'> {errors.email.message} </p>: ""}

                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input type="password" className='form-control' name='password'onChange={(e)=>setPassword(e.target.value)} value={password} />
                        {errors.password? <p className='text-danger'> {errors.password.message} </p>: ""}

                    </div>
                    <div className='form-group'>
                        <label>Confirm Password:</label>
                        <input type="password" className='form-control' name='confirm'onChange={(e)=>setConfirm(e.target.value)} value={confirm} />
                        {errors.confirm? <p className='text-danger'> {errors.confirm.message} </p>: ""}

                    </div>
                    <input type="submit" value="Sign Up" className='btn btn-primary'/>
                </div>
            </form>
        </div>
    )
}

export default RegForm