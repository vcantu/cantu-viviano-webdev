/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteListController', websiteListController);

    function websiteListController($routeParams, userService, websiteService) {

        var model = this;
        var userID = $routeParams['userId'];

        userService.findUserById(userID)
            .then(function (user) {
                model.user = user;
            });

        function init() {
            websiteService.findAllWebsitesForUser(userID)
                .then(function (websites) {
                    model.websites = websites;
                });
        }
        init();
    }
})();