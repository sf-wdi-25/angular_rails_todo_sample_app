angular.module("SampleApp", ['ui.router', 'templates', 'ngResource'])
  .config(routerConfig)
  .controller('TodosController', TodosController)
  .factory('TodosFactory', TodosFactory);



// Your router
routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']; // minification protection
function routerConfig(   $stateProvider,   $urlRouterProvider) {
  // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");
  console.log('router');

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: 'home.html',
    controller: 'TodosController',
    controllerAs: 'todos'
  });

}

TodosController.$inject = ['TodosFactory'];
function TodosController (TodosFactory) {
  var vm = this;
  vm.todoList = [];
  getTodos();


  function getTodos() {
    vm.todoList = TodosFactory.query();
  }

}

TodosFactory.$inject = ['$resource'];
function TodosFactory($resource) {
  return $resource('/api/todos/:todoId');
}
