/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('profileController', profileController);

    function profileController(userService, $location, $rootScope) {
        var model = this;

        model.user = $rootScope.currentUser;
        var userId = model.user._id;

        model.saveUser = function () {
            userService.updateUser(model.user._id, model.user);
        };

        model.removeUser = function () {
            userService.deleteUser(model.user._id)
                .then(function (res) {
                    $location.url('/login');
                })
        };

        model.logout = function () {
            userService.logout()
                .then(function (res) {
                    $rootScope.currentUser = null;
                    model.user = null;
                    $location.url('/login');
                });
        }

    }
})();