/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteNewController', websiteNewController);

    function websiteNewController($routeParams,
                                  userService,
                                  websiteService,
                                  $location) {

        var model = this;
        var userId = $routeParams['userId'];

        userService.findUserById(userId)
            .then(function (user) {
                model.user = user;
            });

        // event handlers
        model.createWebsite = createWebsite;

        function init() {
            websiteService.findAllWebsitesForUser(userId)
                .then(function (websites) {
                    model.websites = websites;
                });
        }
        init();

        // implementation
        function createWebsite(website) {
            website.developerId = userId;
            websiteService.createWebsite(website)
                .then(function (res) {
                    $location.url('/user/' + userId + '/website');
                })
        }
    }
})();