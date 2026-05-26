const app = require('./app')
const mongoose = require('mongoose')
const port = 3000;

const dns = require('dns')
dns.setServers(['8.8.8.8','8.8.4.4'])

const connectionString = 'mongodb+srv://aksyapraveen305_db_user:DdjlJSGyqxEUIS7b@supercampus.2lkmde8.mongodb.net/bookmystay?appName=SuperCampus'
mongoose.connect(connectionString)
.then((conn)=>{
  console.log("script database connected")
})
.catch((err)=>{
 console.log(err)
})

app.listen(port,"localhost",()=>{
    console.log("express.js server started")
})


