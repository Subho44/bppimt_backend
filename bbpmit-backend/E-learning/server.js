const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
const courseRoutes = require('./routes/courseRoutes');


dotenv.config();
connectdb();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/courses',courseRoutes);

app.get('/',(req,res)=>{
    res.send("E-learning api running...");
});
const PORT = process.env.PORT || 6500;
app.listen(PORT,()=>{
    console.log("server is running 6500");
});