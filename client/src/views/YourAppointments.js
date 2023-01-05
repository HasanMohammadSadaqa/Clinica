import React from 'react'

import { DoctorNav } from "../components/DoctorNav";
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios';
// import SmoothScroll from "smooth-scroll";
import { MDBTable } from 'mdb-react-ui-kit';
import styles from './styles.module.css'
import "../App.css";
import PatientNav from '../components/PatientNav';

// export const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 1000,
//     speedAsDuration: true,
// });

const YourAppointments = (props) => {
    const { userLogOut } = props
    const [appointments, setAppointments] = useState([])
    const [LoggedInUser, setLoggedInUser] = useState({})
    const [loaded, setLoaded] = useState(false)

    //method to get a logged in user and catch it by id
    useEffect(() => {
        axios.get("http://localhost:8000/api/user/loggedIn", { withCredentials: true })
            .then(res => {
                setLoggedInUser(res.data.loggedUser)
                setLoaded(true)
                    axios.get('http://localhost:8000/api/appointments/' + res.data.loggedUser._id)
                    .then((res) => {
                        setAppointments(res.data);
                        console.log(res)
                    })
                    .catch(err => {
                        
                        console.log(err)})
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const deleteAppointment = (e,appointmentId)=>{
        console.log(appointmentId)
        axios.delete(`http://localhost:8000/api/users/${appointmentId}`)
        .then(()=>setAppointments(appointments.filter((app)=> appointmentId !== app._id)))
    }
    return (
        <div>
            <PatientNav loggedInUser={LoggedInUser._id} userLogOut={userLogOut}/>
            <h1 className={styles.header1}> {LoggedInUser.firstName} {LoggedInUser.lastName} Appointments:</h1>
            <div className={styles.table1}>
                <MDBTable striped hover>
                    <thead>
                        <tr>
                            <th className='h3'>Date</th>
                            <th className='h3'>Time</th>
                            <th className='h3'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {appointments?.map((appointment, i) => {
                            return (
                                <tr>

                                    <td key={i} className='h3'>{appointment.date}</td>
                                    <td key={i} className='h3'> {appointment.hour}</td>
                                    <td key={i} className='h3'> <button className='btn btn-primary mt-3' onClick={(e)=>deleteAppointment(e,appointment._id)}>Cancel</button> </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </MDBTable>
            </div>
        </div>
    )
}

export default YourAppointments;