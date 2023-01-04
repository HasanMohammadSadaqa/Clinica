import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export const DoctorNav = (props) => {
  const {adminLogOut} =props
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
                <Link className={styles.nav3} to={`/today`}> Appointments </Link>
              </p>
              <p>
                <Link className={styles.nav3} to={`/allPatients`}> Patients </Link>
              </p>
              <p>
                <button onClick ={adminLogOut} className={styles.nav5} to={`/patients`}> Log Out </button>
              </p>
            </div>
          </div>
        </div>
    )
  }
  