
import RegForm from '../components/RegForm'



const Registration = (props) => {
    const {registerNewUser, registrationErrors}= props
    return (
        <div>
            <h3 className='col-12 text-center m-3'>Registration</h3>
            <RegForm initFName="" initLName="" initPhone="" initBD = "" initEmail="" initPass="" initConfirm=""
            onSubmitProp={registerNewUser} errors={registrationErrors} />
        </div>
    )
}

export default Registration
