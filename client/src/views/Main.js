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

import UserProfile from './UserProfile'


const Main = () => {



    return (
        <div>
            <Routes>
                <Route path={`/`} element={<Landing  />}></Route>
                <Route path={`/today`} element={<Today  />}></Route>
                <Route path={`/allPatients`} element={<Allpatients  />}></Route>
                <Route path={`/onePatient/`} element={<OnePatient  />}></Route>
                <Route path={`/onePatient/`} element={<OnePatient  />}></Route>
                <Route path={`/note/`} element={<Note  />}></Route>

                <Route path={`/userProfile`} element={<UserProfile  />}></Route>


                <Route path={`/user/registration`} element={<Registration/>}/>
                <Route path={`/user/login`} element={ <Login/> }/>
                <Route path={`/user/profile`} element={ <UserProfile/> }/>
            </Routes>
        </div>
    )
}

export default Main