const express = require('express');
const app = express()
app.listen(process.env.PORT, () => console.log('Hello, ITC!'));
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function(req, res){
    res.sendFile('./index.html');
})




