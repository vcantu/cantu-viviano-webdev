/**
 * Created by vcantu on 6/6/17.
 */
var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

module.exports = function(app) {
    var connectionString = 'mongodb://localhost/webdev_summer1_2017'; // for local
    if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
        var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
        var password = process.env.MLAB_PASSWORD_WEBDEV;
        connectionString = 'mongodb://' + username + ':' + password;
        connectionString += '@ds013366.mlab.com:13366/heroku_pt3jh7kx'; // user yours
    }
    mongoose.connect(connectionString);

    require("./services/user.service.server.js")(app);
    require("./services/website.service.server.js")(app);
    require("./services/page.service.server.js")(app);
    require("./services/widget.service.server.js")(app);
};
