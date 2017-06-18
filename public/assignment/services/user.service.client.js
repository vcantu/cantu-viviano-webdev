/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .factory('userService', userService);

    function userService($http) {

        return {
            createUser: createUser,
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            deleteUser: deleteUser,
            login: login,
            logout: logout
        };

        function createUser(user) {
            return $http.post("/api/register", user);
        }

        function findUserByUsername(username) {
            return $http.get("/api/user?username=" + username)
                .then(function (res) {
                    return res.data;
                })
        }

        function updateUser(userId, user) {
            return $http.put("/api/user/" + userId, user)
                .then(function (res) {
                    return res.data;
                });
        }

        function deleteUser(userId) {
            return $http.delete("/api/user/" + userId)
                .then(function (res) {
                    return res.data;
                });
        }

        function findUserByCredentials(username, password) {
            return $http.get("/api/user?username=" + username + "&password=" + password)
                .then(function (res) {
                    return res.data;
                });
        }

        function findUserById(userId) {
            return $http.get("/api/user/" + userId)
                .then(function (res) {
                    return res.data;
                })
        }

        function login(user) {
            return $http.post("/api/login", user);
        }

        function logout() {
            return $http.post("/api/logout");
        }
    }
})();