const express = require('express');
const PORT = 5800;
const app = express();

app.use(express.json());
const data = [
    { id: 1, name: "subhojit", city: "kolkata" },
    { id: 2, name: "raj", city: "kolkata" },
    { id: 3, name: "abhi", city: "kolkata" },

];
//insert
app.post('/add',(req,res)=>{
    const newuser = req.body;
    newuser.id = data.length +1;
    data.push(newuser);
    res.json({message:"user added succesfully"});
})
//view
app.get('/',(req,res)=>{
    res.json(data);
});
//search query string
app.get('/search', (req,res)=>{
    const name = req.query.name;
    const result = data.filter(x=>x.name.toLowerCase().includes(name.toLowerCase()));
    res.json(result);
});
//single view
app.get('/user/:id', (req,res)=>{
  const id = parseInt(req.params.id);
  const user = data.find(x=>x.id === id);
  user ? res.json(user) : res.status(404).json({message:"user not found"});
    
});
app.route('/product')
.get((req,res)=>res.send('home page'))
.get((req,res)=>res.send('about page'))
.post((req,res)=>res.send('home page'))


app.listen(PORT,()=>{
    console.log('server is running port 5800');
});