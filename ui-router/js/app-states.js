angular.module('chatApp',['ui.router'])
 .run(
    ['$rootScope','$state','$stateParams',function($rootScope, $state, $stateParams){
      $rootScope.$state = $state;
      $rootScope.$stateParams =  $stateParams;
    }]
  )
 .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        template: '<h1> こんにちは </h1>'
      })
 }])