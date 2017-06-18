/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('loginController', loginController);

    function loginController($location, userService, $rootScope) {
        var model = this;

        model.login = function (username, password) {
            var user = { username: username, password: password };
            console.log('authenticating');
            userService.login(user)
                .then(function (res) {
                    console.log(res);
                    if(res.status == 200) {
                        $rootScope.currentUser = res.data;
                        $location.url('/profile');
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