/**
 * Created by vcantu on 6/6/17.
 */
var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

module.exports = function(app) {
    mongoose.connect('mongodb://localhost/webdev_summer1_2017');

    require("./services/user.service.server.js")(app);
    require("./services/website.service.server.js")(app);
    require("./services/page.service.server.js")(app);
    require("./services/widget.service.server.js")(app);
};
