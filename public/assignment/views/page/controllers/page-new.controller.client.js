/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('pageNewController', pageNewController);

    function pageNewController($routeParams,
                                  userService,
                                  pageService,
                                  $location) {

        var model = this;
        var userId = $routeParams['userId'];

        model.user = userService.findUserById(userId);
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];

        // event handlers
        model.createPage = createPage;

        function init() {
        }
        init();

        // implementation
        function createPage(page) {
            page.websiteId = model.websiteId;
            pageService.createPage(page);
            $location.url('/user/' + model.user._id + '/website/' + model.websiteId  + '/page');
        }
    }
})();