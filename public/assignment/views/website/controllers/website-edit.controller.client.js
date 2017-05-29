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
        model.user = userService.findUserById(userId);
        model.websiteId = $routeParams.websiteId;

        // event handlers
        model.createWebsite = createWebsite;
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            model.websites = websiteService.findAllWebsitesForUser(userId);
            model.website = websiteService.findWebsiteById(model.websiteId);
        }
        init();

        // implementation
        function createWebsite(website) {
            website.developerId = userId;
            websiteService.createWebsite(website);
            $location.url('/user/' + userId + '/website');
        }

        function updateWebsite(website) {
            websiteService.updateWebsite(model.websiteId, website);
        }

        function deleteWebsite(websiteId) {
            websiteService.deleteWebsite(websiteId);
            $location.url('/user/' + userId + '/website');
        }
    }
})();