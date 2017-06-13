/**
 * Created by vcantu on 5/28/17.
 */
var Service = require('./abstract.service.server');

module.exports = function (app) {

    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
    ];

    var model = require('../models/page/page.model.server.js')
    var service = Service(app, 'website', model);
};
