
const mongoose = require('mongoose');

const cSchema = new mongoose.Schema({
    id:String,
    doctor:String,
    patient:String,
    patientPhone:String,
    date:Date,
    // time:Time,
    token:Number,

    symptoms:String,
    description:String,
    prescription:String,

    prescriptionPurchased:{
        type:Boolean,
        default:false
    },
    prescriptionAmount:{
        type:Number,
        default:0
    }
})

module.exports =  mongoose.model('Consultation', cSchema);


//count.document