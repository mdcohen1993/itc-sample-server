const express = require('express');
const app = express()
app.listen(process.env.PORT, () => console.log('Hello, ITC!'));
app.use(express.static('./public'));

app.get('/', function(req, res){
    res.sendFile('./index.html');
    res.sendFile('./leopics1.jpg');
    res.sendFile('./leopics2.jpg');
    res.sendFile('./leopics3.jpg');
})




