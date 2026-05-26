//connect the database

const mongoose = require('mongoose')
const fs = require('fs')
const hotel = require('./../models/hotel')


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

//read the file 

const hotels = JSON.parse(fs.readFileSync('./data/hotels.json','utf-8'))


//delete all the documents and collections 

const deleteDocuments = async ()=>{
    try{
    await hotel.deleteMany({})
    console.log("collection data deleted successfully")
    }catch (error){
      console.log("delete fail")
    }
}


//import all the data into collection

const importDocuments = async () => {
    try{
       await hotel.create(hotels)
       console.log("data impoted")
    } catch (error) {
        console.log(error.message)
    }
    process.exit()
}

if(process.argv[2]==="--delete")
{
  deleteDocuments()
}
if(process.argv[2]==="--import")
{
  importDocuments()
}
// console.log(process.argv)
