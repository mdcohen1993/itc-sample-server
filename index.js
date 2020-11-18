const express = require('express');
const app = express()
let cloudinary = require('cloudinary')
app.listen(process.env.PORT, () => console.log('Hello, ITC!'));
app.use(express.static('./public'));
app.use(express.static('./css'));

app.get('/', function(req, res){
    res.sendFile('./index.html');
})




