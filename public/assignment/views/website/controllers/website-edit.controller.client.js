/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteEditController', websiteEditController);

    function websiteEditController($routeParams,
                                   userService,
                                   websiteService,
                                   $location) {

        var model = this;
        var userId = $routeParams['userId'];

        userService.findUserById(userId)
            .then(function (user) {
                model.user = user;
            });

        model.websiteId = $routeParams.websiteId;

        // event handlers
        model.createWebsite = createWebsite;
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            websiteService.findAllWebsitesForUser(userId)
                .then(function (websites) {
                    model.websites = websites;
                });
            websiteService.findWebsiteById(model.websiteId)
                .then(function (website) {
                    model.website = website;
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

        function updateWebsite(website) {
            websiteService.updateWebsite(model.websiteId, website);
        }

        function deleteWebsite(website) {
            websiteService.deleteWebsite(website._id)
                .then(function (res) {
                    $location.url('/user/' + userId + '/website');
                })
        }
    }
})();