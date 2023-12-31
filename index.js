var express = require('express');
var app = express();

var path    = require("path");

// set static directories
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/index.html'));
});

app.listen(3000);