var express = require('express'),
    app = express(),
    port = process.env.PORT || 1138;

//Todo: Make better and move to external config
var authString = '/800';
var mainlight_on = authString + '/mainlight/on';
var mainlight_off = authString + '/mainlight/off';
// Scenes /mainlight/scene/[name]
// Colours /mainlight/colour/green
// Brightness /mainlight/brightness/up/down/number
// Fade Over Time
// On / Off
//Todo: add auth
//Todo: add to routing file for main light
app.get(mainlight_on, function(req, res) {
    console.log('Light on.');
    //req.json();
});

app.get(mainlight_off, function(req, res) {
    console.log('Light off.');
    //req.json();
});


app.listen(port);
console.log('Listening on port ' + port);