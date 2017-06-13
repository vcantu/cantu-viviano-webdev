/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('profileController', profileController);

    function profileController(userService, $routeParams, $location) {

        var model = this;
        var userId = $routeParams['userId'];

        model.user = userService.findUserById(userId)
            .then(function (user) {
               model.user = user;
            });

        model.saveUser = function () {
            userService.updateUser(model.user._id, model.user);
        }

        model.removeUser = function () {
            userService.deleteUser(model.user._id)
                .then(function (res) {
                    $location.url('/login');
                })
        }

    }
})();