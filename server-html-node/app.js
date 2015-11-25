var express = require('express');
var app = express();

app.use(express.static('./../html/public'));

app.listen(30001, function () {
    console.log('Listening on ' + 30001)
});
