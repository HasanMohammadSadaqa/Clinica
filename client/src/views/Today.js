import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DoctorNav } from "../components/DoctorNav";
import { Link } from 'react-router-dom';
import { MDBTable } from 'mdb-react-ui-kit';
import styles from './styles.module.css'
import "../App.css";



const Today = (props) => {

    const {adminLogOut} = props
    const[appointments,setAppointment]=useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/appointments`)
            .then((res) =>{setAppointment(res.data);
            console.log(res.data)
            })
            .catch(err=> console.log(err))
    }, [])
    return (
        <div>
            <DoctorNav adminLogOut={adminLogOut} />
            <h1 className={styles.header1 }>Today's Appoitments</h1>

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