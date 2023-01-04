// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import  { useNavigate } from 'react-router-dom'

// import { PatientNav } from "../components/PatientNav";
// import { Link } from 'react-router-dom';

// import { MDBTable } from 'mdb-react-ui-kit';
// import styles from './styles.module.css'
// import "../App.css";






// const UserProfile = () => {
//   const [LoggedInUser, setLoggedInUser] = useState("")
//   const navigate =useNavigate()


//   //method to get a looged in user and catch it by id
  // useEffect(()=>{
  //   axios.get("http://localhost:8000/api/user/loggedIn", {withCredentials: true})
  //     .then(res=>{
  //       console.log(res)
  //       console.log("hiiiiiiiiiii")
  //       setLoggedInUser(res.data.loggedUser)
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //     })
  // }, [])

//   //method to log out by clear the cookie
//   const logOut = (e)=>{
//     axios.get("http://localhost:8000/api/user/logout", {withCredentials: true})
//       .then(res=>{
//         console.log(res)
//         navigate("/");
//       })
//       .catch(err=>{
//         console.log(err)
//       })
//   }
//   return (
//     <div>
//     <PatientNav />
//     <h1 className={styles.header1 }>All Pateints:</h1>
//     <div className={styles.table1 }>
//         <MDBTable striped hover>
//         <thead>
//             <tr>
//                 <th className='h3'>Day</th>
//                 <th className='h3'>Time</th>
//                 <th className='h3'>Cancel the Appointment</th>
//             </tr>
//         </thead>
//         <tbody>
//             {allUsers?.map((user, id) => {
//                 return (
//                     <div>
//                         <tr>
//                             <td key={id} className='h3'> <Link to={`/${user._id}`} >{user.firstName} {user.lastName} </Link></td>
//                             <td key={id} className='h3'> {user.gender} </td>
//                             <td key={id} className='h3'> {user.birthDay}</td>
//                         </tr>
//                     </div>
//                 )
//             })}
//         </tbody>
//         </MDBTable>
//     </div>
// </div>
//   )
// }

// export default UserProfile