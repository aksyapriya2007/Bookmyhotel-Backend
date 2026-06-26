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
        required: [true, 'hotel type required'],
        enum:{
            values:['resort','villa','apartment','cabin'],
            message:"this type of hotel not allowed"
    }
},
    city: {
        type: String,
        required: [true, 'city is mandatory for hotel '],
        minLength:3,
        maxLength:50
    },
    // description:String,
    ratings: {
        type: Number,
        min: [0,"min ratings should be 0"],
        max: [5, "max ratings should be 5"]
    //    validate:{
    //     validator:function(value){
    //         return value >=0 && value <=5
    //     },
    //     message:"ratings are not valid"
    //    }
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
    },
    createdAt:{
        type:String
    },
    createdBy:{
        type:String
    }

},{
    toJSON:{virtuals:true}
})

hotelSchema.virtual('isPremium').get(function(){
    return this.cheapestPrice >=2000
})

hotelSchema.pre('save',function(){
        this.createdAt = new Date().toISOString()
        this.createdBy = "aksya"
})

hotelSchema.post('save',function(docs){
    console.log(docs)
})

hotelSchema.pre('find',function(){
    this.find({isDeleted:false})
})

hotelSchema.post('find',function(docs){
    console.log(`${docs.length} hotel retrieved`)
})

hotelSchema.pre('aggregate',function(){
     this.pipeline().unshift({
     $match:{isDeleted:false}
     })
     console.log(this.pipeline())
})

hotelSchema.post('aggregate',function(docs){
    console.log(docs)
})


module.exports= mongoose.model('Hotel', hotelSchema);


//  const hotel1 = new Hotel({

//             name: 'Dotel',
//             city: 'Chennai',
//             cheapestPrice: 5000
//      });

// hotel1.save()
