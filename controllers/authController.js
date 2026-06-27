const User = require('./../models/user')

exports.signUp = async(request,response)=>{
    try{
        
        const newUser = await User.create(request.body)

        response.status(200).json({
            status:"success",
            message:"user created suucesssfully",
            data:{
                newUser
            }
        })
    }catch(error){
            response.status(500).json({
                status:"failed",
                message:error.message
            })
    }
}



