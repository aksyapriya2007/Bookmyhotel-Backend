const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"hotel name is required"],
        trim:true
    },
    city:{
        type:String,
        required:[true,"city is required for hotel"],
        
    },
    type:{
        type:String,
        required:[true,"hotel type is required"],
    },
    address:{
        type:String,
        required:[true,"address is required"],
    },
    distance:{
        type:String,
        required:[true,"distance is required"],
    },
    category:{
        type:[String],
        required:[true,"category is requird for customisation"]
    },
    images:{
        type:[String],
    },
    rooms:{
        type:[String],
        required:[true,"rooms is require for hotel"],
    },
    cheapestPrice:{
        type:Number,
        required:[true,"price is required for a hotel"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    description:{
        type:String,
        requird:[true,"description is required for this hotel"]
    },
    ratings:{
        type:Number,
        minlength:0,
        maxlength:10,
        required:[true,"ratings is required for hotel customisation"]
    }
})

 const Hotel = mongoose.model('Hotel', hotelSchema);
 const hotel1 = new Hotel({

            name: 'Dotel',
            city: 'Chennai',
            price: 5000
     });

// hotel1.save()

module.exports = mongoose.model('Hotel', hotelSchema)