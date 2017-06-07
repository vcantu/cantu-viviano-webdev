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

        userService.findUserById(userId)
            .then(function (user) {
                model.user = user;
            });
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];

        // event handlers
        model.createWidget = createWidget;

        function init() {
        }
        init();

        // implementation
        function createWidget(widgetType) {
            var widget = {};
            widget.widgetType = widgetType;
            widget.pageId = model.pageId;

            console.log('creating widget', widget);
            widgetService.createWidget(widget)
                .then(function (widget) {
                    $location.url(
                        '/user/' + model.user._id +
                        '/website/'+ model.websiteId  +
                        '/page/' + model.pageId +
                        '/widget/' + widget._id);
                })

        }
    }
})();