/**
 * Created by vcantu on 6/12/17.
 */

var Model = require('../abstract.model.server');
var schema = require('./widget.schema.server');

var model = Model('WidgetModel', schema);
var pageModel = require('../../models/page/page.model.server');


model.createObj = function(obj) {
    var pageId = obj.pageId;
    obj._page = obj.pageId;
    delete obj.pageId;

    return model
        .create(obj)
        .then(function (obj) {
            return pageModel
                .addWidget(pageId, obj._id);
        });
};

model.removeObj = function(id, obj) {
    return model
        .remove({_id: id})
        .then(function (status) {
            return pageModel
                .removeWidget(obj._page, obj._id);
        })
};

model.findAllWidgets = function (pageId) {
    return model
        .find({_page: pageId})
        .exec();
};

module.exports = model;