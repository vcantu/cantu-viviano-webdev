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
        model.user = userService.findUserById(userID);

        function init() {
            model.websites = websiteService.findAllWebsitesForUser(userID);
        }
        init();
    }
})();