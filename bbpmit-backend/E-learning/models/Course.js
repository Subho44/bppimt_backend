const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    instructor:{type:String, required:true},
    price:{type:Number, required:true},
    duration:{type:Number, required:true},
    thumbnail:{type:String, required:true},

}, {timestamps:true});
module.exports = mongoose.model('Course-ardent',courseSchema);