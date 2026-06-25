const Hotel = require('../models/hotel')
const ApiFeatures = require('../utilities/features')

exports.getAllHotels = async (request, response) => {

         try{
          
         const features=new ApiFeatures(Hotel.find(),request.query)
         const query = features.filter().sort().fieldLimit().pagination().queryObj;
         
         const hotels = await query

         response.status(200).json({
            status:"successs",
            count: hotels.length,
            data :{
                hotels
            }
        })

      } catch (error) {
             response.status(500).json({
                status:"error",
                message:"error"
             })
      }
}

exports.getFeaturedHotels = async(request,response)=>{
    //   request.query.param.feature = 'true'
    //   request.query.params.ratings = '-ratings'
    //   request.query.params.limit = 5
    // Object.defineProperty(request,'query',{
    //  value:{...request.query,feature:true,sort:'-ratings',limit:5}
    // })

    //   next()

    try{
                const hotelFeature = await Hotel.aggregate([
                {$match:{feature:'true'}},
                {$sort:{ratings:-1}},
                {count :{ $sum:1}}
        ])

        response.status(200).json({
            status:"success",
            count:hotelfeature.length,
            data:{
                hotelFeature
            }
        })

    }catch(error){
         response.status(500).json({
                status:"error",
                message:"error"
             })
    }
}
exports.getByCity =async(request,response)=>{

       try{
 
        const hotelCity = await Hotel.aggregate([
            {
                $group:{
                    _id:'$city',
                    hotels:{$push:'$name'},
                    count:{$sum:1}
                }
            }
        ])
            response.status(200).json({
            status:"success",
            count:hotelCity.length,
            data:{
                hotelCity
            }
        })
       }catch(error){
              
                response.status(500).json({
                status:"error",
                message:"error"
             })
       }
}
exports.getByType = async(request,response)=>{
    try{
         const hotelType = await Hotel.aggregate([
            {
                $group:{
                    _id:'$type',
                    hotels:{$push:'$name'},
                    count:{$sum:1}
                    
                }
            }

         ])
             response.status(200).json({
                staus:"success",
                count:hotelType.length,
                data:{
                    hotelType
                }
             })
    }catch(error){
              
                response.status(500).json({
                status:"error",
                message:"error"
             })
    }
}

// exports.getHotelStats = async (request,response)=>{
//     try{

//           const hotelStats = await Hotel.aggregate([
//             { $match:{ type:'hotel'} },
//             { 
//                 $group :{
//                 _id: '$city',
//                 avgRatings:{ $avg:'$ratings'},
//                 minPrice: { $min: '$cheapestPrice'},
//                 maxPrice: { $max: '$cheapestPrice'},
//                 totalPrice :{ $sum: '$cheapestPrice' },
//                 count :{ $sum : 1}

//             }
//         },

//         {$sort :{minPrice:1}},
//         {$limit :4},
//         {$addFields: {city:'$_id'}},
//         {$project: {_id: 0 }},
        

//         ])

//         response.status(200).json({
//             status:"success",
//             count:hotelStats.length,
//             data:{
//                 hotelStats
//             }
//         })
// } catch (error){
//          response.status(500).json({
//                 status:"error",
//                 message:error.message
//              })
//     }
// }
// exports.getHotelByCategory =async (request,response)=>{
//     try{
        
//            const hotelByCategory = await Hotel.aggregate([
//             { $unwind:'$category' },
//             { 
//                 $group :{
//                 _id: '$category',
//                 hotels:{$push: '$name'},
//                 count : { $sum : 1}
//             }
//         },

//         {$sort :{count:-1}},
//         {$addFields: {category:'$_id'}},
//         {$project: {_id: 0 }},
        

//         ])

//         response.status(200).json({
//             status:"success",
//             count:hotelByCategory.length,
//             data:{
//                 hotelByCategory
//             }
//         })


//     }catch(error){
//           response.status(500).json({
//                 status:"error",
//                 message:error.message
//              })
//     }
// }







exports.createHotels = async (request,response)=>{
   
      try{
        
        const hotel = await Hotel.create(request.body);
        response.status(201).json({
            status: 'success',
            data: {
                hotel: hotel
            }

        })

      } catch (error) {
        response.status(500).json({
            status: 'Fail',
            message: 'Failed to create a Document'
        })
    }

}

exports.getHotelById = async (request,response)=>{
    
    try {
        const hotelData = await Hotel.findById(request.params.id);
        response.status(200).json({
            status: "success",
            data: hotelData
        })
    } catch (error) {
        response.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.deleteHotel = async (request,response)=>{
   
    try{
        const id = request.params.id;
        await Hotel.deleteOne({_id:id})
        response.status(201).json({
            status: 'success',
            message:"data deleted suucessfully"

        })
    } catch(error){
            response.status(500).json({
            status: 'Fail',
            message: 'Failed to create a Document'
        })
    }
   
}
