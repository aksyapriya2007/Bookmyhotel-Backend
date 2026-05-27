const express = require('express');
const hotelController = require('./../controllers/hotelController');
const hotelRouter = express.Router();

// hotelRouter.param('id',hotelController.checkHotelExist)

hotelRouter.route('/')
         .get(hotelController.getAllHotels)
         .post(hotelController.createHotels)
         
hotelRouter.route('/:id')
         .get(hotelController.getHotelById)
         .delete(hotelController.deleteHotel)



module.exports=hotelRouter

