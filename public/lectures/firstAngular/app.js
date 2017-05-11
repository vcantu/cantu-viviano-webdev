(function () { //IIFE
    angular
        .module("TodoApp", [])
        .controller("TodoListController", TodoListController);
        
        function TodoListController ($scope) {
            $scope.todo = { title: "insert title" }
            $scope.addTodo = addTodo
            $scope.todos = [];
            $scope.removeTodo = removeTodo;
            
            function removeTodo(index) {
                $scope.todos.splice(index, 1);
            }
            
            function addTodo(todo) {
                var newTodo = {
                    title: todo.title
                };
                $scope.todos.push(newTodo);
                console.log($scope.todos);
            }
        }
  
})()