
var auth = {
    //
    // Update with your auth tokens.
    //
    consumerKey : "wGZB-55TSAHeTqqLLTugww",
    consumerSecret : "kkQifbUPO6smMhHqr3LXVXQEODQ",
    accessToken : "emfbijnN_YscAimIvyNZL1Ix4RIMyHBS",
    // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
    // You wouldn't actually want to expose your access token secret like this in a real application.
    accessTokenSecret : "SElWUZcrPrXhhnvRpsZfmL-K3b4",
    serviceProvider : {
        signatureMethod : "HMAC-SHA1"
    }
};

var terms = 'restaurant';
var near = 'Portland, OR';
var radius_filter = "10";

var accessor = {
    consumerSecret : auth.consumerSecret,
    tokenSecret : auth.accessTokenSecret
};
parameters = [];
parameters.push(['term', terms]);
parameters.push(['location', near]);
parameters.push(['callback', 'cb']);
parameters.push(['oauth_consumer_key', auth.consumerKey]);
parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
parameters.push(['oauth_token', auth.accessToken]);
parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

var message = {
    'action' : 'http://api.yelp.com/v2/search',
    'method' : 'GET',
    'parameters' : parameters
};

OAuth.setTimestampAndNonce(message);
OAuth.SignatureMethod.sign(message, accessor);

var parameterMap = OAuth.getParameterMap(message.parameters);
console.log(parameterMap);


