var express = require('express');
var app = express();

//testing urls get request
var eventbriteUrl = "http://www.eventbrite.com/e/sausalitoartfestival2014tickets11831764125?"+
"aff=ehometext&rank=0";
var encodedUrl = "/?getUrl=" + encodeURIComponent(eventbriteUrl);

// app.get("/", function(req, res) {
// 	console.log(req.method, req.url);
// 	res.send("hey yo");
// });

app.use(express.static(__dirname));
// app.use(function (req, res, next) {
// 	console.log('here');
// 	console.log('%s %s', req.method, req.url);
// 	//next()
// });

// app.use(function(req, res, next){
// 	res.send('how about now');
// })


var server = app.listen(8000, function() {
	console.log('Listening on port %d', server.address().port);
});