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

    app.get('/api/page', filter);
    var model = require('../models/page/page.model.server.js')
    var service = Service(app, 'page', model);


    function filter(req, res) {
        if (req.query.websiteId) {
            model
                .findAllPages(req.query.websiteId)
                .then(function (response) {
                    res.json(response);
                })
        }
        else {
            service.filter(req, res);
        }
    }

};
