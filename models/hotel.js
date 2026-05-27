const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
     name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        // apartment villa , resort , cabin , cafeteria 
        type: String,
        required: [true, 'hotel type required']
    },
    city: {
        type: String,
        required: [true, 'city is mandatory for hotel ']
    },
    // description:String,
    ratings: {
        type: Number,
        min: 0,
        max: 5
    },
    address: {
        type: String,
        required: [true, 'address of hotel is required ']

    },
    distance: {
        type: Number,
        required: [true, 'current location to hotel location is required']
    },
    category: {
        type: [String],
        required: [true, 'category is required ']
    },
    images: {
        type: [String]
    },
    rooms: {
        type: [String]
    },
    cheapestPrice: {
        type: Number,
        required: [true, "Cheapest price is required for Hotel"]
    },
    feature: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: [true, 'description is required ']
    }

})
 const Hotel = mongoose.model('Hotel', hotelSchema);
 const hotel1 = new Hotel({

            name: 'Dotel',
            city: 'Chennai',
            cheapestPrice: 5000
     });

// hotel1.save()
module.exports = Hotel