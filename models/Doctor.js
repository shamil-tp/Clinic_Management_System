const mongoose = require('mongoose');

const dSchema = new mongoose.Schema({
    id:String,
    name:String,
    phone:String,
    available:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('Doctor', dSchema);