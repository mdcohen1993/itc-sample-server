const express = require('express');
const app = express()
let cloudinary = require('cloudinary')
app.listen(process.env.PORT, () => console.log('Hello, ITC!'));
app.use(express.static('./public'));

app.get('/', function(req, res){
    res.sendFile('./index.html');
})




