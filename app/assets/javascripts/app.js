angular.module("SampleApp", ['ui.router', 'templates'])
  .config(routerConfig)
  .controller('HomeController', HomeController);



// Your router
config.$inject = ['$stateProvider', '$urlRouterProvider']; // minification protection
function routerConfig(   $stateProvider,   $urlRouterProvider) {
  // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");
  console.log('router');

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: 'home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  });

}


function HomeController () {
  var vm = this;
  console.log("Hi, I'm the HomeController");
  vm.homeTest = "Welcome to the homepage!";
}
