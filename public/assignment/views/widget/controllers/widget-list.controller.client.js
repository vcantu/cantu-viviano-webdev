/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetListController', widgetListController);

    function widgetListController($routeParams, userService, widgetService, $sce) {

        var model = this;
        var userID = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];

        userService.findUserById(userID)
            .then(function (user) {
                model.user = user;
            });

        function init() {
            model.widgets = widgetService.findWidgetsByPageId(model.pageId)
                .then(function(widgets) {
                    model.widgets = widgets;
                    console.log(widgets);
                })
        }
        init();

        model.getEmbededUrl = function (url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);

            if (match && match[2].length == 11) {
                return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + match[2]);
            } else {
                return 'error';
            }
        }
    }
})();