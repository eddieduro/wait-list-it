

var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
app.listen( process.env.PORT || 3000, function() { 
	console.log('listening')
});

// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'wGZB-55TSAHeTqqLLTugww',
  consumer_secret: 'kkQifbUPO6smMhHqr3LXVXQEODQ',
  token: 'emfbijnN_YscAimIvyNZL1Ix4RIMyHBS',
  token_secret: 'SElWUZcrPrXhhnvRpsZfmL-K3b4',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'restaurant', location: 'Portland' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business('yelp-portland')
  .then(console.log)
  .catch(console.error);

yelp.phoneSearch({ phone: '+15555555555' })
  .then(console.log)
  .catch(console.error);

// A callback based API is also available:
yelp.business('yelp-portland', function(err, data) {
  if (err) return console.log(error);
  console.log(data);
});


// var app = http.createServer(function(request, response){
// 	fs.readFile(__dirname + "boxer.html", "utf-8", function(err, data){
// 		response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(data);
//         response.end();
// 	});
// }).listen(3000);
