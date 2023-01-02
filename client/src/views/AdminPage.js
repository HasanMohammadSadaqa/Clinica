import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminPage = () => {
    const navigate = useNavigate()

    const logOut = (e) => {
        axios.get("http://localhost:8000/api/user/logout", { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate("/");
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <button onClick={logOut}>LogOut!</button>
        </div>
    )
}

export default AdminPage