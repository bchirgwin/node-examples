var request = require('request');

var baseUrl = 'http://localhost:8080';

var getUsers = function () {
    request(baseUrl + '/api/users', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('request: GET http://localhost:8008/api/users');
            console.log(JSON.parse(body))
        }
    });
};

getUsers();

