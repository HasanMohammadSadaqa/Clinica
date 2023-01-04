import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { DoctorNav } from "../components/DoctorNav";
import { Link } from 'react-router-dom';


import SmoothScroll from "smooth-scroll";
import { MDBTable } from 'mdb-react-ui-kit';
import styles from './styles.module.css'
import "../App.css";



const Today = (props) => {
    const navigate = useNavigate()
    const[appointments,setAppontments]=useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/appointments`)
            .then((res) =>{setAppontments(res.data);
            console.log(res.data)
            })
            .catch(err=> console.log(err))
    }, [])
    // const { users } = props


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
            <h1 className={styles.header1 }>Today's Appointments</h1>
            <div className={styles.table1 }>
                <MDBTable striped hover>
                <thead>
                    <tr>
                        <th className='h3'>Name</th>
                        <th className='h3'>Hour</th>
                        <th className='h3'>Note</th>

                    </tr>
                </thead>
                <tbody>
                    {appointments?.map((appointment, i) => {
                        return (
                                <tr>
                                    <td key={i} className='h3'> <Link to={`/onePatient/${appointment.user._id}`} >{appointment.user.firstName} {appointment.user.lastName} </Link></td>
                                    <td key={i} className='h3'> {appointment.hour+2} :00</td>
                                    <td key={i} className='h3'> <Link to={`/note/${appointment._id}`} >Make a Note</Link></td>
                                </tr>
                        )
                    })}
                </tbody>
                </MDBTable>
            </div>
        </div>
    )
}

export default Today;