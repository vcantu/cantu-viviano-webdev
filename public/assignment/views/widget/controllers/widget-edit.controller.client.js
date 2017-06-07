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
        userService.findUserById(userId)
            .then(function (user) {
                model.user = user;
            });
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        model.widgetId = $routeParams['widgetId'];


        // event handlers
        model.updateWidget = updateWidget;
        model.deleteWidget = deleteWidget;

        function init() {
            widgetService.findWidgetById(model.widgetId)
                .then(function (widget) {
                    model.widget = widget;
                })
            console.log(model.widget);
        }
        init();


        function updateWidget(widget) {
            widgetService.updateWidget(model.widgetId, widget)
                .then(function (widget) {
                    $location.url(
                        '/user/' + model.user._id +
                        '/website/'+ model.websiteId  +
                        '/page/' + model.pageId +
                        '/widget/');
                })
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