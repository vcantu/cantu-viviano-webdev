/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetNewController', widgetNewController);

    function widgetNewController($routeParams,
                                  userService,
                                  widgetService,
                                  $location) {

        var model = this;
        var userId = $routeParams['userId'];

        model.user = userService.findUserById(userId);
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];

        // event handlers
        model.createWidget = createWidget;

        function init() {
        }
        init();

        // implementation
        function createWidget(widgetType) {
            var widgetId = widgetService.createWidget(widgetType);
            $location.url(
                '/user/' + model.user._id +
                '/website/'+ model.websiteId  +
                '/page/' + model.pageId +
                '/widget/' + widgetId);
        }
    }
})();