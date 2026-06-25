const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({
  path:'./config.env'
})
const port = process.env.PORT
console.log(process.env)


const dns = require('dns')
dns.setServers(['8.8.8.8','8.8.4.4'])


const connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString)
.then((conn)=>{
  console.log("connected to mongoDB")
})
.catch((err)=>{
 console.log(err)
})

app.listen(port,"localhost",()=>{
    console.log("express.js server started")
})


