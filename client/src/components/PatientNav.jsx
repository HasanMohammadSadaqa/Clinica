import { Link, Navigate } from 'react-router-dom'
import styles from './styles.module.css'

const PatientNav = (props) => {
  const {userLogOut} = props
    return (
      <div className={styles.nav1}>
        <div className=''>
          <a className={styles.nav2} href='/'>
            Clinica
          </a>
        </div>

        <div className=' ' id=''>
          <div className={styles.nav4}>
            <p>
              <Link className={styles.nav3} to={`/appointments`}> Home </Link>
            </p>
            <p>
              <Link className={styles.nav3} to={`/patientProfile`}> Profile </Link>
            </p>
            <p>
              <Link className={styles.nav3} to={`patients`}> Book </Link>
            </p>
            <p>
              <button onClick ={userLogOut} className={styles.nav5}> Log Out </button>
            </p>
          </div>
        </div>
      </div>
    )
  }

  export default PatientNav;
