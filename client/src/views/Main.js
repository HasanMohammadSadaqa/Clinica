import React from 'react'


import { Routes, Route } from 'react-router-dom'
import Allpatients from './AllPatients'
import Landing from './Landing'
import Today from './Today'
import OnePatient from './OnePatient'
import Note from './Note'
import Registration from './Registration';
import UserProfile from './UserProfile';
import Login from './Login';
import UpdateProfile from './UpdateProfile'
import ViewNote from './ViewNote'
import YourAppointments from './YourAppointments'
import Osama from './Osama'




const Main = () => {



    return (
        <div>
            <Routes>
                <Route path={`/`} element={<Landing  />}></Route>
                <Route path={`/today`} element={<Today  />}></Route>
                <Route path={`/allPatients`} element={<Allpatients  />}></Route>
                <Route path={`/onePatient/:id`} element={<OnePatient  />}></Route>
                <Route path={`/note/:id`} element={<Note  />}></Route>

                <Route path={`/yourAppointments`} element={<YourAppointments  />}></Route>
                <Route path={`/updateProfile/:id`} element={<UpdateProfile  />}></Route>
                <Route path={`/viewNote/:id`} element={<ViewNote  />}></Route>
                <Route path={`/osama`} element={<Osama/>} />

                <Route path={`/userProfile`} element={<UserProfile  />}></Route>


                <Route path={`/user/registration`} element={<Registration/>}/>
                <Route path={`/user/login`} element={ <Login/> }/>

            </Routes>
        </div>
    )
}

export default Main