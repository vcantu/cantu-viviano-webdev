/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('pageListController', pageListController);

    function pageListController($routeParams, userService, pageService) {

        var model = this;
        var userID = $routeParams['userId'];
        model.websiteID = $routeParams['websiteId'];
        model.user = userService.findUserById(userID);

        function init() {
            model.pages = pageService.findPagesByWebsiteId(model.websiteID);
        }
        init();
    }
})();