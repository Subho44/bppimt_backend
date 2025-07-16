const express = require('express');
const router = express.Router();
const Course = require('../models/Course');


//post data
router.post('/',async(req,res)=>{
    try {
        const {title,description,instructor,duration,price,thumbnail} = req.body;
        const course = new Course({title,description,instructor,duration,price,thumbnail});
        await course.save();
        res.status(201).json(course);
    } catch(err) {
        res.status(401).json({error:err.message});
    }
});
//view all couses
router.get('/',async(req,res)=>{
    try {
       
        const courses =  await Course.find();
        res.status(200).json(courses);
    } catch(err) {
        res.status(404).json({error:err.message});
    }
});

module.exports = router;