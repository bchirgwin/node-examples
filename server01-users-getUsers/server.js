var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var port = process.env.PORT || 8080;
var users = require('./models/users')

router.get('/users', function (req, res) {
    res.json( users.getUsers() );
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', router);


app.listen(port, function(){
    console.log('Server at ', port);
});
