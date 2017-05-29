/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .factory('widgetService', widgetService);

    function widgetService() {

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

        return {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };

        function createWidget(website) {
            website._id = (new Date()).getTime() + "";
            website.created = new Date();
            website.updated = new Date();
            widgets.push(website);
        }

        function updateWidget(websiteId, website) {
            // TODO; this
        }

        function deleteWidget(websiteId) {
            var website = widgets.find(function (website) {
                return website._id === websiteId;
            });
            var index = widgets.indexOf(website);
            widgets.splice(index, 1);
        }

        function findWidgetById(websiteId) {
            return widgets.find(function (website) {
                return website._id === websiteId;
            });
        }

        function findWidgetsByPageId(pageId) {
            var resultSet = [];
            for(var w in widgets) {
                if(widgets[w].pageId === pageId) {
                    // websites[w].created = new Date();
                    // websites[w].updated = new Date();
                    resultSet.push(widgets[w]);
                }
            }
            return resultSet;
        }
    }
})();