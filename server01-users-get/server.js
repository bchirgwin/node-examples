var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var port = process.env.PORT || 8080;

router.get('/users', function (req, res) {
    res.json( require('./models/users'));
});

router.get('/about', function (req, res) {
    res.send({message: 'about!'});
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', router);


app.listen(port, function(){
    console.log('Server at ', port);
});
