import React from 'react'

import { DoctorNav } from "../components/DoctorNav";
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
// import SmoothScroll from "smooth-scroll";
import { MDBTable } from 'mdb-react-ui-kit';
import styles from './styles.module.css'
import "../App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 1000,
//     speedAsDuration: true,
// });

const OnePatient = (props) => {
    const navigate = useNavigate()

    const { oneUser } = props
    const { id } = useParams()
    console.log(id)
    const[appointments,setAppointments]=useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/appointments/id/'+id)
            .then((res) =>{setAppointments(res.data);
            console.log('http://localhost:8000/api/appointments/'+id)
            })
            
            .catch(err=> console.log(err))
    }, [])


    const logOut = (e) => {
        axios.get("http://localhost:8000/api/user/logout", { withCredentials: true })
            .then(res => {

                navigate("/");
            })
            .catch(err => {
                console.log(err)
            })
    }





    return (
        <div>
            <DoctorNav onClickprop={logOut} />
            <h1 className={styles.header1 }> {appointments.user.firstName} {appointments.user.lastName} Appointments:</h1>
            <div className={styles.table1 }>
                <MDBTable striped hover>
                <thead>
                    <tr>
                        <th className='h3'>Note's Content</th>
                        <th className='h3'>Note's Appointment Date</th>



                        <th className='h3'>BirthDay</th>

                    </tr>
                </thead>
                <tbody>
                    {appointments?.map((appointment, id) => {
                        return (
                                <tr>
                                    <td key={id} className='h3'>{appointment.note}</td>
                                    <td key={id} className='h3'> {appointment.date} </td>
                                </tr>
                        )
                    })}
                </tbody>
                </MDBTable>
            </div>
        </div>
    )
}

export default OnePatient;