class ApiFeatures{

    constructor(queryObj,queryParam){

        this.queryObj=queryObj;
        this.queryParam=queryParam
    }

    //filter

    filter(){
        
        const queryObj = {...this.queryParam}
        const excludedFields = ['sort','fields','page','limit']
        excludedFields.forEach((ele)=>{

            delete queryObj[ele]
        })
        
        const filteredQuery = getFilteredFinalQuery(queryObj)
        this.queryObj =  this.queryObj.find(filteredQuery)
        
        return this
    }

    sort(){
         if(this.queryParam.sort){

            const sortBy = this.queryParam.sort.split(',').join(' ')
            this.queryObj = this.queryObj.sort(sortBy)
        } else {
            this.queryObj = this.queryObj.sort('cheapestPrice')
        }
        return this
    }

    fieldLimit(){
         if(this.queryParam.fields){

            const fields = this.queryParam.fields.split(',').join(' ')
            this.queryObj = this.queryObj.select(fields)
        } else {

            this.queryObj = this.queryObj.select('-__v')
        }
          return this
    }

    pagination(){

        const page = this.queryParam.page || 1
        const limit = this.queryParam.limit || 70
        const skip = (page-1)*limit

        this.queryObj = this.queryObj.skip(skip).limit(limit)

        // if(request.query.page){

        //    const totalHotels = await Hotel.countDocuments()
        //    if(skip >= totalHotels){

        //     throw new error('page not found')
        //    }
        // }
        return this
    }


}


const getFilteredFinalQuery = (queryObj) => {
    const filterQuery = {};
   
    for(const key in queryObj) {
        const value = queryObj[key];
        const match = key.match(/^(.*)\[(gte|gt|lte|lt)\]$/);
        console.log(match)
        if (match) {
            const fieldName = match[1]       //ratings
            const operator = `$${match[2]}`  //$gte
            if (!filterQuery[fieldName]) {
                filterQuery[fieldName] = {};
                filterQuery[fieldName][operator] = value
            }
        } else {
            filterQuery[key] = value
        }
    }
      console.log(filterQuery)
      return filterQuery
}


module.exports =ApiFeatures