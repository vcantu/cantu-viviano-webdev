/**
 * Created by vcantu on 5/28/17.
 */
var Service = require('./abstract.service.server');

module.exports = function (app) {

    var widgets = [
        { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];

    app.get('/api/widget', filter);
    var model = require('../models/widget/widget.model.server.js')
    var service = Service(app, 'widget', model);

    function filter(req, res) {
        if (req.query.pageId) {
            model
                .findAllWidgets(req.query.pageId)
                .then(function (response) {
                    res.json(response);
                })
        }
        else {
            service.filter(req, res);
        }
    }
};