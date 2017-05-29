/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('profileController', profileController);

    function profileController(userService, $routeParams) {

        var model = this;
        var userId = $routeParams['userId'];

        model.user = userService.findUserById(userId);
    }
})();