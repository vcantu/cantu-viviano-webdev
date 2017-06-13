/**
 * Created by vcantu on 6/12/17.
 */

var Model = require('../abstract.model.server');
var schema = require('./website.schema.server');

var model = Model('WebsiteModel', schema);
var userModel = require('../../models/user/user.model.server');

model.createObj = function(obj) {
    var userId = obj.developerId;
    obj._user = obj.developerId;
    delete obj.developerId;

    return model
        .create(obj)
        .then(function (obj) {
            return userModel
                .addWebsite(userId, obj._id);
        });
};

model.removeObj = function(id, userId) {
    return model
        .remove({_id: id})
        .then(function (obj) {
            return userModel
                .removeWebsite(userId, id);
        });
};

model.findAllSites = function (userId) {
    return model
        .find({_user: userId})
        .populate('_user', 'username')
        .exec();
}

model.addPage = function(id, pageId) {
    return model
        .findById(id)
        .then(function (website) {
            website._pages.push(pageId);
            return website.save();
        })
};

model.removePage = function (id, pageId) {
    return model
        .findById(id)
        .then(function (website) {
            var index = website._pages.indexOf(pageId);
            website._pages.splice(index, 1);
            return website.save();
        })
};

module.exports = model;