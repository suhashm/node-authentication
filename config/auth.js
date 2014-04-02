
// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID' 		: 'your-consumer-key-here', // your App ID
        'clientSecret' 	: 'your-client-secret-here', // your App Secret
        'callbackURL' 	: 'http://floating-island-1816.herokuapp.com/auth/facebook/callback'
        //'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey' 		: 'your-consumer-key-here',
        'consumerSecret' 	: 'your-client-secret-here',
        'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
        //'callbackURL' 		: 'http://floating-island-1816.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID' 		: 'your-secret-clientID-here',
        'clientSecret' 	: 'your-client-secret-here',
        'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
        //'callbackURL' 	: 'http://floating-island-1816.herokuapp.com/auth/google/callback'
    }

};
