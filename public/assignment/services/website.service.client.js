/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .factory('websiteService', websiteService);

    function websiteService($http) {

        return {
            createWebsite: createWebsite,
            findAllWebsitesForUser: findAllWebsitesForUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };

        function createWebsite(website) {
            website.created = new Date();
            website.updated = new Date();

            return $http.post("/api/website", website)
                .then(function (res) {
                    return res.data;
                });
        }

        function updateWebsite(websiteId, website) {
            return $http.put("/api/website/" + websiteId, website)
                .then(function (res) {
                    return res.data;
                });
        }

        function deleteWebsite(websiteId) {
            return $http.delete("/api/website/" + websiteId)
                .then(function (res) {
                    return res.data;
                });
        }

        function findWebsiteById(websiteId) {
            return $http.get("/api/website/" + websiteId)
                .then(function (res) {
                    return res.data;
                })
        }

        function findAllWebsitesForUser(userId) {
            return $http.get("/api/website?developerId=" + userId)
                .then(function (res) {
                    console.log(res);
                    return res.data;
                })
        }
    }
})();