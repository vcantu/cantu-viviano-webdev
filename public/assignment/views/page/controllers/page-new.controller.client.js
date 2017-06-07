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

        userService.findUserById(userId)
            .then(function (user) {
                model.user = user;
            });
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];

        // event handlers
        model.createPage = createPage;

        // implementation
        function createPage(page) {
            page.websiteId = model.websiteId;
            pageService.createPage(page)
                .then(function () {
                    $location.url(
                        '/user/' + model.user._id +
                        '/website/' + model.websiteId  +
                        '/page');
                })
        }
    }
})();