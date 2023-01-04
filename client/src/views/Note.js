import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NoteForm from '../components/NoteForm'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { DoctorNav } from '../components/DoctorNav'



const Note = () => {
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])

  const { id } = useParams()
  const navigate = useNavigate()

//   const[appointment,setAppointment]= useState([])
//   useEffect(() => {
//       axios.get('http://localhost:8000/api/appointments/id/'+id)
//           .then((res) =>{setAppointment(res.data)
//         .then(() => setLoaded(true))
//           console.log('http://localhost:8000/api/appointments/'+id)
//           })
          
//           .catch(err=> console.log(err))
//   }, [])

  const createNote = (note) => {
    console.log(note)
    axios.post(`http://localhost:8000/api/note/`+id, note)
      .then((res) => {
      console.log(res);
    //   navigate(`/today`);
    })
      .catch(err => console.log(err))

      
  }


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
        <h1 className={styles.header1 }>Add your notes here:</h1>
      { <NoteForm  onSubmitProp={createNote} errors={errors} />}
    </div>
  )
}

export default Note