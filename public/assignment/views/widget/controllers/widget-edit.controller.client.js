/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetEditController', widgetEditController);

    function widgetEditController($routeParams,
                                   userService,
                                   widgetService,
                                   $location) {

        var model = this;
        var userId = $routeParams['userId'];
        model.user = userService.findUserById(userId);
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        model.widgetId = $routeParams['widgetId'];


        // event handlers
        model.createWidget = createWidget;
        model.updateWidget = updateWidget;
        model.deleteWidget = deleteWidget;

        function init() {
            model.widget = widgetService.findWidgetById(model.widgetId);
            console.log(model.widget);
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

        function updateWidget(widget) {
            widgetService.updateWidget(model.widgetId, widget);
            $location.url(
                '/user/' + model.user._id +
                '/website/' + model.websiteId +
                '/page/' + model/pageId +
                '/widget');
        }

        function deleteWidget(widgetId) {
            widgetService.deleteWidget(widgetId);
            $location.url(
                '/user/' + model.user._id +
                '/website/' + model.websiteId +
                '/page/' + model/pageId +
                '/widget');
        }
    }
})();