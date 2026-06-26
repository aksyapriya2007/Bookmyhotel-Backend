const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    firstName:{
             type:String,
             trim:true,
             required:[true,'firstname is mandatory'],
             validate:[validator.isAlpha,"only alphabets are allowed"],
    },
    lastName:{
            type:String,
             trim:true,
             required:[true,'lastname is mandatory'],
             validate:[validator.isAlpha,"only alphabets are allowed"],
    },
    email:{
           type:String,
             trim:true,
             required:[true,'email is mandatory'],
             validate:[validator.isEmail,"only alphabets are allowed"],
    },
    photo:{
          type:String,
    },
    password:{
        type:String,
        trim:true,
        required:[true,'password is mandatory'],
        minLength: 8 
    },
    confirmPassword:{
                 type:String,
                 trim:true,
                 required:[true,'password is mandatory'],
                 minLength: 8 
    },
},

{timestamps:true}

)

module.exports = mongoose.model('User',userSchema)