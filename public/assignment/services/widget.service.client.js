/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .factory('widgetService', widgetService);

    function widgetService($http) {

        return {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };

        function createWidget(widget) {
            widget.created = new Date();
            widget.updated = new Date();
            return $http.post("/api/widget", widget)
                .then(function (res) {
                    return res.data;
                });
        }

        function updateWidget(widgetId, widget) {
            return $http.put("/api/widget/" + widgetId, widget)
                .then(function (res) {
                    return res.data;
                });
        }

        function deleteWidget(widgetId) {
            return $http.delete("/api/widget/" + widgetId)
                .then(function (res) {
                    return res.data;
                });
        }

        function findWidgetById(widgetId) {
            return $http.get("/api/widget/" + widgetId)
                .then(function (res) {
                    return res.data;
                })
        }

        function findWidgetsByPageId(pageId) {
            return $http.get("/api/widget?pageId=" + pageId)
                .then(function (res) {
                    return res.data;
                })
        }
    }
})();