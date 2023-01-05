const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require('mongoose-unique-validator')
uniqueValidator.defaults.message = 'this email is already used, please try in anther one'

const AppointmentSchema = new mongoose.Schema({
    date: { type: String },
    hour: { type: Number },
    note:{type:String},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

}, { timestamps: true });
module.exports.Appointment = mongoose.model('Appointment', AppointmentSchema);


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        },
        unique: [true, "this email is already used"]
    },
    phone: {
        type:Number,
        required: [true, "Phone is required"],
        minlength: [10, "your phone must be at least 10 characters"]
    },

    birthday: {
        type: Date,
        required:["Birthday is required"],
        default: Date.now,
    },
    password: {
        type: String,
        required: ["password is required"],
        minlength:[8, "password must have at least 8 characters"]

    },
    appointments:[AppointmentSchema]
},
    { timestamps: true }
);
UserSchema.plugin(uniqueValidator)


// UserSchema.virtual("confirm")
//     .get(function(){
//         return this._confirm
//     })
//     .set(function(value){
//         this._confirm = value
//     })


// UserSchema.pre("validate", function(next){
//     if(this.password !== this.confirm){
//         this.invalidate("confirm", "passwords must match")
//     }
//     next();
// })

UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        })
        .catch(err=>{
            console.log("HASHING PASSWORD DIDN'T WORK THO", err)
            next()
        });
});


module.exports.User = mongoose.model("User", UserSchema);