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

        model.user = userService.findUserById(userId);

        // event handlers
        model.createWebsite = createWebsite;

        function init() {
            model.websites = websiteService.findAllWebsitesForUser(userId);
        }
        init();

        // implementation
        function createWebsite(website) {
            website.developerId = userId;
            websiteService.createWebsite(website);
            $location.url('/user/'+userId+'/website');
        }
    }
})();