const http = require('http');

const product = [
    { id: 1, name: 'Laptop', price: 67000 },
    { id: 2, name: 'Watch', price: 67000 },
    { id: 3, name: 'Tab', price: 67000 },
    { id: 4, name: 'Iphone', price: 67000 },
];
const newproduct =  { id: 5, name: 'mac', price: 270000 };
const updatedproduct = [...product,newproduct];

//create server
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'application/json'});
    
    if(req.url === '/products') {
        res.end(JSON.stringify(product))
    }
    else if(req.url === '/updateproduct') {
        res.end(JSON.stringify(updatedproduct))
    }
    else {
        res.end(JSON.stringify({message:"product not found"}));
    }
    

});
const port = 5600;
server.listen(port, () => {
    console.log('server is running successfully 5600');
})