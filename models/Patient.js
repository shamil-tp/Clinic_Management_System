const mongoose = require('mongoose');

const pSchema = new mongoose.Schema({
    id:String,
    name:String,
    phone:String,
    age:Number,
    gender:String,
    bloodGroup:String,
    address:String,
    createdAt:Date,
    lastVisit:String,
});

module.exports =  mongoose.model('Patient', pSchema);

