const express= require('express');
const userRouter = express.Router();


userRouter.usersParamMiddleware=(request,response,next,value,name)=>{
    console.log(`user datas are fetched with this data :${value}`);
    next();
}
userRouter.get('/',(request,response)=>{
    response.send("all users are fetched")
})
userRouter.get('/:id',(request,response)=>{
    response.send('user dats are fetced with :' + request.params.id)
})
module.exports=userRouter;