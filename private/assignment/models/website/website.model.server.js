/**
 * Created by vcantu on 6/12/17.
 */

var Model = require('../abstract.model.server');
var schema = require('./website.schema.server');

var model = Model('WebsiteModel', schema);
var userModel = require('../../models/user/user.model.server');

model.createObj = function(obj) {
    console.log("new website obj");
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

model.removeObj = function(id, obj) {
  return model
      .remove({_id: id})
      .then(function (status) {
          return userModel
              .removeWebsite(userId, obj._id);
      })
};

model.findAllSites = function (userId) {
    return model
        .find({_user: userId})
        .populate('_user', 'username')
        .exec();
}

module.exports = model;