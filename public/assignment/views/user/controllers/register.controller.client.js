/**
 * Created by vcantu on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('registerController', registerController);

    function registerController($location, userService) {

        var model = this;

        // event handlers
        model.register = register;

        // implementation
        function register(username, password, password2) {

            if (!username || !password) {
                model.error = "Please fill out the required fields"
                return;
            }

            if(password !== password2) {
                model.error = "Passwords must match";
                return;
            }

            userService.findUserByUsername(username)
                .then(function (users) {
                    console.log(users);
                    if (users.length > 0)
                        model.error = "Username is not available";
                    else
                        createUser()
                })
                .catch(function (error) {
                    console.log('error')
                    createUser()
                });
            
            function createUser() {
                var user = {
                    username: username,
                    password: password
                };
                // model.message = user;
                userService.createUser(user)
                    .then(function (user) {
                        $location.url('/user/' + user._id);
                    })
            }
        }
    }
})();