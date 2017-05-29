/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetListController', widgetListController);

    function widgetListController($routeParams, userService, widgetService) {

        var model = this;
        var userID = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];

        model.user = userService.findUserById(userID);

        function init() {
            model.widgets = widgetService.findWidgetsByPageId(model.pageId);
        }
        init();
    }
})();