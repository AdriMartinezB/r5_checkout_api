const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
//    Insurance: {
        Owner:{
            type: String,
            required: true,
            minlength: 6,
            maxlength: 30,
            regex : '^[A-Z\s]*$'
        },
        DocumentId:{
            type: Number,
            required: true,
            minlength: 3,
            maxlength: 20,
            regex : '^[0-9]*$'
        },
        DocumentType:{
            type: String,
            required: true,
            minlength: 2,
            maxlength: 2,
        },
        ValidityStartDate:{
            type: Date,
            required: true,
        },
        ValidityEndDate:{
            type: String,
            required: true,
        },
        InsuranceCompany:{
            type: String,
            required: true,
            minlength: 3,
            maxlength: 20,
        },
        PolicyNumber:{
            type: Number,
            required: true,
            minlength: 13,
            maxlength: 10,
        },
        FasecoldaCode:{
            type: Number,
            required: true,
            length: 8,
        },
//    },

    RegistrationNumber:{
            type: String,
            required: true,
            minlength: 6,
            maxlength: 6,
            //regex : /^[A-Z]{3}+[0-9]{2}+[0-9A-Z]{1}/
        },
        CarMake:{
            type: String,
            required: true,
            minlength: 3,
            maxlength: 20,
            //regex : /[A-Za-z\s]/
        },
        VehicleType:{
            type: String,
            required: true,
            minlength: 3,
            maxlength: 20,
            //regex : /[A-Za-z\s]/
        },
        RegistrationYear:{
            type: Number,
            required: true,
            minlength: 4,
            maxlength: 4,
        },
        CarModel:{
            type: String,
            required: true,
            minlength: 2,
            maxlength: 15,
        },
        description:{
            type: String,
            required: true,
            minlength: 2,
            maxlength: 30,
        }
})

const model = mongoose.model('model', mySchema)
module.exports = model