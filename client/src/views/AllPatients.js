import React from 'react'

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

const Allpatients = (props) => {
    const { allUsers } = props


    return (
        <div>
            <DoctorNav />
            <h1 className={styles.header1 }>All Pateints:</h1>
            <div className={styles.table1 }>
                <MDBTable striped hover>
                <thead>
                    <tr>
                        <th className='h3'>Name</th>
                        <th className='h3'>Gender</th>
                        <th className='h3'>Birth Day</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers?.map((user, id) => {
                        return (
                            <div>
                                <tr>
                                    <td key={id} className='h3'> <Link to={`/${user._id}`} >{user.firstName} {user.lastName} </Link></td>
                                    <td key={id} className='h3'> {user.gender} </td>
                                    <td key={id} className='h3'> {user.birthDay}</td>
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

export default Allpatients;