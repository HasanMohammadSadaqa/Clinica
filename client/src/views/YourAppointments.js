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
    const {userId} = props

    const [LoggedInUser, setLoggedInUser] = useState("")
    const [loaded, setLoaded] = useState(false)

    //method to get a looged in user and catch it by id
    useEffect(() => {



        axios.get("http://localhost:8000/api/user/loggedIn", { withCredentials: true })
            .then(res => {
                console.log(res)
                console.log("hiiiiiiiiiii")
                setLoggedInUser(res.data.loggedUser)
                setLoaded(true)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // const { oneUser } = props
    // const { id } = useParams()
    // console.log()
    const [appointments, setAppointments] = useState([])
    // if (loaded){
        
    // }
    // console.log("hosamaaaaaaaaaaaaaaaaaaaaaaaa")
    useEffect(() => {
        console.log(userId)
        axios.get('http://localhost:8000/api/appointments/id/' + userId)
            .then((res) => {
                setAppointments(res.data);
                console.log("oooooooooooooooooooooooooooooooo")
            })
            .catch(err => console.log(err))
    }, [])






    return (
        <div>
            osama 
            <h1>{LoggedInUser._id}</h1>
            {/* <PatientNav />
            <h1 className={styles.header1}> {appointments.user.firstName} {appointments.user.lastName} Appointments:</h1>
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
                                    <td key={i} className='h3'> <Link to={`/viewNote/${appointment.user._id}`} >Make a Note</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </MDBTable>
            </div> */}
        </div>
    )
}

export default YourAppointments;