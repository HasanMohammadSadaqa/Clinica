import { Link, Navigate } from 'react-router-dom'

const PatientNav = (props) => {
  
    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='d-flex'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
  
  
            </button>
            <a className='navbar-brand page-scroll' href='#page-top'>
              React Landing Page
            </a>{' '}
          </div>
  
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right d-inline'>
              <li>
                <Link className='page-scroll' to={`/appointments`}> Home </Link>
              </li>
              <li>
                <Link className='page-scroll' to={`/patientProfile`}> Profile </Link>
              </li>
              <li>
                <Link className='page-scroll' to={`/patients`}> Book </Link>
              </li>
              <li>
              {/* <button onClick ={onClickprop}className='page-scroll'> Log out </button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

  export default PatientNav
