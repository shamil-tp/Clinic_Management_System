
const mongoose = require('mongoose');

const cSchema = new mongoose.Schema({
    id:String,
    doctor:String,
    patient:String,
    date:String,
    time:String,
    token:Number,

    symptoms:String,
    desc:String,
    prescription:String,

    prescriptionPurchased:{
        type:Boolean,
        default:false
    },
    prescriptionAmount:Number
})

module.exports =  mongoose.model('Consultation', cSchema);


//count.document