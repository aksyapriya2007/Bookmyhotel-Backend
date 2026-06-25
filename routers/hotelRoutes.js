const express = require('express');
const hotelController = require('./../controllers/hotelController');
const hotelRouter = express.Router();

// hotelRouter.param('id',hotelController.checkHotelExist)
// hotelRouter.get('/get-featured',hotelController.getAllHotels)


hotelRouter.route('/get-featured')
         .get(hotelController.getFeaturedHotels)

// hotelRouter.route('/gethotels-stats')
//            .get(hotelController.getHotelStats)

// hotelRouter.route('/getHotelsBy-category')
//             .get(hotelController.getHotelByCategory)

hotelRouter.route('/getCity')
            .get(hotelController.getByCity)

hotelRouter.route('/getType')
            .get(hotelController.getByType)
            
hotelRouter.route('/')
         .get(hotelController.getAllHotels)
         .post(hotelController.createHotels)
         
hotelRouter.route('/:id')
         .get(hotelController.getHotelById)
         .delete(hotelController.deleteHotel)



module.exports=hotelRouter

