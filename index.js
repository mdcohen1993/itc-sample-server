const express = require('express');
const app = express()
app.listen(process.env.PORT, () => console.log('Hello, ITC!'));
app.use(express.static('/itc-sample-server/public'));

app.get('/', function(req, res){
    res.sendFile('/itc-sample-server/public/index.html')
})




