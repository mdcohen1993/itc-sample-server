const express = require('express');
const app = express()
let cloudinary = require('cloudinary')
app.listen(process.env.PORT, () => console.log('Hello, ITC!'));
app.use(express.static('./public'));

cloudinary.uploader.upload("leopics1.jpg",
function(result) { console.log(result) });

cloudinary.uploader.upload("leopics2.jpg",
function(result) { console.log(result) })

cloudinary.uploader.upload("leopics3.jpg",
function(result) { console.log(result) })

app.get('/', function(req, res){
    res.sendFile('./index.html');
})




