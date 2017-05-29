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
        model.user = userService.findUserById(userId);
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];


        // event handlers
        model.createPage = createPage;
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        function init() {
            model.page = pageService.findPageById(model.pageId);
        }
        init();

        // implementation
        function createPage(page) {
            page.websiteId = model.websiteId;
            pageService.createPage(page);
            $location.url('/user/' + model.user._id + '/website/' + model.websiteId  + '/page');
        }

        function updatePage(page) {
            pageService.updatePage(model.pageId, page);
            $location.url('/user/' + model.user._id + '/website/' + model.websiteId  + '/page');
        }

        function deletePage(pageId) {
            pageService.deletePage(pageId);
            $location.url('/user/' + model.user._id + '/website/' + model.websiteId + '/page');
        }
    }
})();