// Set the 'test' environment configuration object
module.exports = {
    db: 'mongodb://localhost:27020/mean-test',
    sessionSecret: 'testSessionSecret',
    facebook: {
        clientID: 'Facebook Application Id',
        clientSecret: 'facebook applcation Secret',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback' //facebook and google both don't work...
    },
    twitter: {
        clientID: 'Twitter Application ID',
        clientSecret: 'Twitter Application Secret',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    },
    google: {
        clientID: 'Google application id',
        clientSecret: 'google application Secret',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};
