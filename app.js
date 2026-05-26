const express = require('express');
const app = express();
const hotelRouter = require('./routers/hotelRoutes');
app.use(express.json())

// const morgan = require('morgan');
// app.use(express.static('./template'))
// const userRouter = require ('./routers/userRoutes')
// const logger = (request, response, next) => {
//     console.log(`${request.method}:${request.url}`);
//     next();
// }

// app.use((request, response, next) => {
//     request.requestedAt = new Date().toISOString();
//     next();
// })

// app.use(logger);
// app.use(morgan('dev'))


app.use('/api/v1/hotels', hotelRouter);


// app.use('/api/v1/users',userRouter)
// app.param('id',userRouter.usersParamMiddleware)

module.exports = app; 








// app.get('/api/hotels',(request,response) => {
//     response.status(200).send({"status":"success","message":"all hotels datas are fetched"})
// });
// app.get('/api/hotels/:id',(request,response) =>{
//     response.status(404).send({"status":"success","message":"all hotel datas are fetched","id":54321})
// });   
// app.get('/api/hotels/:id/:customer',(request,response) => {
//     response.status(200).send({"status":"success","name":"aksyapriya"})
// });
// app.get('/api/hotels/:id/:customer/:room',(request,response)=>{
//     response.status(200).send( [
//   { id: 1, name: "aksya", age:  22 },
//   { id: 2, name: "Priya", age: 21 },
//   { id: 3, name: "praveen", age: 23 }
// ])
// })
//GET localhost:3000/api/v1/hotels

// app.get('/api/v1/hotels', hotelController.getAllHotels)   

// POST localhost:3000/api/v1/hotels

// app.post('/api/v1/hotels',hotelController.createHotels)

//GET  localhost:3000/api/v1/hotels/10

// app.get('/api/v1/hotels/:id{/:name}',hotelController.getHotelById)

//PATCH 

// app.patch('/api/v1/hotels/:id{/:name}',hotelController.updatedHotel)

//DELETE localhost:3000/api/v1/hotels/:id'

// app.delete('/api/v1/hotels/:id{/:name}',hotelController.deleteHotel)









































