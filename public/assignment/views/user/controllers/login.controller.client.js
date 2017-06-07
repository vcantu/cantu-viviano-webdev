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

            userService.findUserByCredentials(username, password)
                .then(function (users) {
                    if(users.length > 0) {
                        $location.url('/user/' + users[0]._id);
                    } else {
                        model.message = "Username " + username + " not found, please try again";
                    }
                })
                .catch(function (error) {
                    model.message = "Username " + username + " not found, please try again";
                });
            


        };
    }
})();