/**
 * Created by vcantu on 5/28/17.
 */
var Service = require('./abstract.service.server');

module.exports = function (app) {

    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
        { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
        { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
    ];

    app.get('/api/website', filter);

    var model = require('../models/website/website.model.server.js');
    var service = Service(app, 'website', model);

    function filter(req, res) {
        if (req.query.developerId) {
            model
                .findAllSites(req.query.developerId)
                .then(function (response) {
                    res.json(response);
                })
        }
        else {
            service.filter(req, res);
        }
    }


};