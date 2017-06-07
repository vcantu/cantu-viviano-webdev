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
        userService.findUserById(userID)
            .then(function (user) {
                model.user = user;
            });

        function init() {
            pageService.findPagesByWebsiteId(model.websiteID)
                .then(function (pages) {
                    model.pages = pages;
                })
        }
        init();
    }
})();