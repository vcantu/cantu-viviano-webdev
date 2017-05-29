/**
 * Created by vcantu on 5/29/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/heading', {
                templateUrl: 'views/widget/templates/widget-edit.view.client.html',
                controller: 'widgetEditController',
                controllerAs: 'model'
            })
    }
})();