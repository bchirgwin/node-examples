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

var getUser = function (id) {
    request(baseUrl + '/api/users/' + id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('request: GET http://localhost:8008/api/users/5');
            console.log(JSON.parse(body));
        }
    });
};

var addUser = function (name) {
    request.post(baseUrl + '/api/users', {"form": {"name": name}}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('request: POST http://localhost:8008/api/users');
            console.log(JSON.parse(body));
        }
    });
};

getUsers();

getUser(5);

addUser('Snow White');
getUsers();

