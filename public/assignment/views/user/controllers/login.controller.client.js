/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('loginController', loginController);

    function loginController($location, userService) {
        var model = this;

        model.login = function (username, password) {

            var found = userService.findUserByCredentials(username, password);

            if(found !== null) {
                $location.url('/user/' + found._id);
                // $scope.message = "Welcome " + username;
            } else {
                model.message = "Username " + username + " not found, please try again";
            }
        };
    }
})();