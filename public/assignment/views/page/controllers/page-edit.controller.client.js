/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('pageEditController', pageEditController);

    function pageEditController($routeParams,
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
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        function init() {
            pageService.findPageById(model.pageId)
                .then(function (page) {
                    model.page = page;
                })
        }
        init();

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

        function updatePage(page) {
            pageService.updatePage(model.pageId, page)
                .then(function () {
                    $location.url(
                        '/user/' + model.user._id +
                        '/website/' + model.websiteId  +
                        '/page');
                })
        }

        function deletePage(page) {
            pageService.deletePage(page._id)
                .then(function () {
                    $location.url(
                        '/user/' + model.user._id +
                        '/website/' + model.websiteId  +
                        '/page');
                })
        }
    }
})();