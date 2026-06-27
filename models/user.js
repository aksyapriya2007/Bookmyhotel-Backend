const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    firstName:{
             type:String,
             trim:true,
             lowercase:true,
             required:[true,'firstname is mandatory'],
             validate:[validator.isAlpha,"only alphabets are allowed"],
    },
    lastName:{
            type:String,
             trim:true,
             lowercase:true,
             required:[true,'lastname is mandatory'],
             validate:[validator.isAlpha,"only alphabets are allowed"],
    },
    email:{
           type:String,
             trim:true,
             lowercase:true,
             unique:[true,"same email already exists"],
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
                 required:[true,'password is mandatory'],
                 validate:{
                    validator:function (value) {
                        return value === this.password
                    },
                    message:"password and confirm paasword mismatched"
                 }

    },
},{timestamps:true})

userSchema.pre('save',function(){
    this.confirmPassword = undefined
})

module.exports = mongoose.model('User',userSchema)