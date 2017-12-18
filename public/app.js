angular.module('decode', [
    'ui.router',
    'ngCookies',
    'ngResource',
    'mgcrea.ngStrap'
  
]).config(routeConfig);
routeConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $locationProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(true);

      $urlRouterProvider.otherwise('/');
      
      $stateProvider
          .state('bets', {
              url: '/',
          templateUrl: 'views/bets.html',
            controller: 'BetsCtrl',
          controllerAs: 'vm'
          })
         
          .state('news', {
              url: '/news', // через двоеточие мы указываем параметры stata
          templateUrl: 'views/news.html',
            controller: '',
          controllerAs: ''
          })

             .state('results', {
              url: '/results', // через двоеточие мы указываем параметры stata
          templateUrl: 'views/results.html',
            controller: '',
          controllerAs: ''
          })
          
          
}


    
 


 
 
console.log("bets");