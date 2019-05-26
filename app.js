var express = require('express');
var routes  = require('./src/routes');
var cors    = require('cors'); 
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(cors());
app.use('/', routes);

var server = app.listen(8003, function() {
    console.log('Server listening on port ' + server.address().port);
});

module.exports = app;