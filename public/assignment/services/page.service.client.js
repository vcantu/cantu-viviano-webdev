/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .factory('pageService', pageService);

    function pageService($http) {

        return {
            createPage: createPage,
            findPagesByWebsiteId: findPagesByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };

        function createPage(page) {
            page._id = (new Date()).getTime() + "";
            page.created = new Date();
            page.updated = new Date();
            return $http.post("/api/page/", page)
                .then(function (res) {
                    return res.data;
                });
        }

        function updatePage(pageId, page) {
            return $http.put("/api/page/" + pageId, page)
                .then(function (res) {
                    return res.data;
                });
        }

        function deletePage(pageId) {
            return $http.delete("/api/page/" + pageId)
                .then(function (res) {
                    return res.data;
                });
        }

        function findPageById(pageId) {
            return $http.get("/api/page/" + pageId)
                .then(function (res) {
                    return res.data;
                })
        }

        function findPagesByWebsiteId(websiteId) {
            return $http.get("/api/page?websiteId=" + websiteId)
                .then(function (res) {
                    return res.data;
                })
        }
    }
})();