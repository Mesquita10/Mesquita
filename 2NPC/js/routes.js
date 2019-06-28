angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/h',
    views: {
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('buscarPrato', {
    url: '/page5',
    templateUrl: 'templates/buscarPrato.html',
    controller: 'buscarPratoCtrl'
  })

  .state('perfil', {
    url: '/page6',
    templateUrl: 'templates/perfil.html',
    controller: 'perfilCtrl'
  })

$urlRouterProvider.otherwise('/page1/h')


});