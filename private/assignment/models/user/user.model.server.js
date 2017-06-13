/**
 * Created by vcantu on 6/12/17.
 */

var Model = require('../abstract.model.server');
var schema = require('./user.schema.server');

var model = Model('UserModel', schema);

model.addWebsite = function(id, siteId) {
    return model
        .findById(id)
        .then(function (user) {
            user._websites.push(siteId);
            return user.save();
        })
};

model.removeWebsite = function (id, siteId) {
    return model
        .findById(id)
        .then(function (user) {
            var index = user._websites.indexOf(websiteId);
            user._websites.splice(index, 1);
            return user.save();
        })
};

module.exports = model;