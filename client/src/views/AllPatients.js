import React from 'react'

import { DoctorNav } from "../components/DoctorNav";
import { Link } from 'react-router-dom';


import SmoothScroll from "smooth-scroll";
import { MDBTable } from 'mdb-react-ui-kit';
import styles from './styles.module.css'
import "../App.css";

import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// export const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 1000,
//     speedAsDuration: true,
// });

const Allpatients = (props) => {
    const navigate = useNavigate()


    const[users,setUsers]=useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
            .then((res) =>{setUsers(res.data);
            console.log(res.data)
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
                    {users?.map((user, id) => {
                        return (
                                <tr>
                                    <td key={id} className='h3'> <Link to={`/onePatient/${user._id}`} >{user.firstName} {user.lastName} </Link></td>
                                    <td key={id} className='h3'> {user.gender} </td>
                                    <td key={id} className='h3'> {user.birthday}</td>
                                </tr>
                        )
                    })}
                </tbody>
                </MDBTable>
            </div>
        </div>
    )
}

export default Allpatients;