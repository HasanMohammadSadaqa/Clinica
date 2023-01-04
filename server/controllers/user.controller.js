const {User,Appointment }= require("../models/user.model");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");
const {secret} = require("../config/jwt.config");



class UserController{
    register (req, res){
        const user = new User(req.body)
        user.save()
            .then(()=>{
                // const payload = {
                //     id: user._id
                // };
                res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly: true})
                .json({msg: "successfully created user", user: user})
            })
            .catch(err=> res.json(err))
    }

    login(req, res){
        User.findOne({email: req.body.email})
            .then(user=>{
                if(user === null){
                    res.json({msg:"invalid login attempt (invalid email)"})
                }else{
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid=>{                    //note that the "passwordIsValid" is a boolean variable thst store the result of compare
                            if(passwordIsValid){
                                res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly: true})
                                .json({msg: "success!"});
                            }else{
                                res.json({msg: "invalid login attempt (incorrect password)"})
                            }
                        })
                        .catch(err=> res.json({msg: "invalid login attempt", err}))
                }
            })
            .catch(err=> res.json(err))
    }

    getLoggedInUser= (req, res) => {
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true});
        User.findById(decodedJWT.payload._id)
            .then(loggedUser=>{
                res.json({loggedUser})
            })
            .catch(err=>{
                res.json({msg:'something went wrong', err})
            })
    }
}
module.exports = new UserController()



module.exports.logOut= (req,res)=>{
    res.cookie("usertoken", jwt.sign({_id:""}, secret), {
        httpOnly: true,
        maxAge: 0 
    }).json({msg:"the cookie successfully destroy"})

}


module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}

module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(users => response.json(users))
        .catch(err => response.json(err))
}

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.json(err))
}

module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.newAppointment = (request, response) => {
  const { id,num } = request.params;
  const date =request.body.date;
  Appointment.create({
    hour: num,
    date,
    user:id
  })
  .then(appointment => {
    User.findOne({ _id: id })
    .then(user => {
      user.appointments.push(appointment);
      user.save()
      .then(() => response.json(appointment))
      .catch(err => response.json(err));
    })
    .catch(err => response.json(err));
  })
  .catch(err => response.json(err));
  
}


module.exports.allAppointments = (request, response) => {
    Appointment.find({}).populate('user')
    .then(appointment => response.json(appointment))
    .catch(err => response.json(err))
}

module.exports.dateAppointments = (request, response) => {
    const { date } = request.body;
    Appointment.find({date:date})
    
    .then(appointments => {response.json(appointments);
        console.log(appointments)
       })
    .catch(err => response.json(err))
}

module.exports.userAppointments = (request, response) => {
  const { id } = request.params;
  User.findOne({ _id: id })
  .then(user=>{
    console.log(user);
    response.json(user.appointments);
  })

}

module.exports.addNote = (request, response) => {
    const { id } = request.params;
    console.log(id+"=========================================================");

    const note =request.body.note;
    Appointment.findOne({ _id: id })
    .then(appointment=>{
      console.log(appointment+"=========================================================");
    appointment.note=note;
    appointment.save();
    response.json(appointment)
  })

}
