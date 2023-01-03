import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { DoctorNav } from "../components/DoctorNav";
import { Link } from 'react-router-dom';


import SmoothScroll from "smooth-scroll";
import { MDBTable } from 'mdb-react-ui-kit';
import styles from './styles.module.css'
import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const Today = (props) => {
    const { users, adminLogOut} = props
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
                    {users?.map((user, id) => {
                        return (
                            <div>
                                <tr>
                                    <td key={id} className='h3'> <Link to={`/${user._id}`} >{user.firstName} {user.lastName} </Link></td>
                                    <td key={id} className='h3'> {user.appointment.hour} </td>
                                    <td key={id} className='h3'> <Link to={`/${user.appointment._id}/note`} >Make a Note</Link></td>
                                </tr>
                            </div>
                        )
                    })}
                </tbody>
                </MDBTable>
            </div>
        </div>
    )
}

export default Today;