/**
 * Created by vcantu on 6/12/17.
 */

var Model = require('../abstract.model.server');
var schema = require('./page.schema.server');

var model = Model('PageModel', schema);
var websiteModel = require('../../models/website/website.model.server');


model.createObj = function(obj) {
    var websiteId = obj.websiteId;
    obj._website = obj.websiteId;
    delete obj.websiteId;

    return model
        .create(obj)
        .then(function (obj) {
            return websiteModel
                .addPage(websiteId, obj._id);
        });
};

model.removeObj = function(id, obj) {
    return model
        .remove({_id: id})
        .then(function (status) {
            return websiteModel
                .removePage(obj._website, obj._id);
        })
};

model.findAllPages = function (websiteId) {
    return model
        .find({_website: websiteId})
        .exec();
};

model.addWidget = function(id, widgetId) {
    return model
        .findById(id)
        .then(function (page) {
            page._widgets.push(widgetId);
            return page.save();
        })
};

model.removeWidget = function (id, widgetId) {
    return model
        .findById(id)
        .then(function (page) {
            var index = page._widgets.indexOf(widgetId);
            page._widgets.splice(index, 1);
            return page.save();
        })
};

module.exports = model;