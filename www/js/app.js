// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })


    .state('tab.inbox', {
      url: '/inbox',
      views: {
        'inbox-tab': {
          templateUrl: 'templates/inbox.html'
        }
      }
    })
    
    // the stream (pet) tab has its own child nav-view and history
    .state('tab.stream-index', {
      url: '/stream',
      views: {
        'stream-tab': {
          templateUrl: 'templates/stream.html',
          controller: 'PetIndexCtrl'
        }
      }
    })

    .state('tab.stream-detail', {
      url: '/stream/:petId',
      views: {
        'stream-tab': {
          templateUrl: 'templates/stream-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })

    .state('tab.bank', {
      url: '/bank',
      views: {
        'bank-tab': {
          templateUrl: 'templates/bank.html'
        }
      }
    })

    .state('tab.mypage', {
      url: '/mypage',
      views: {
        'mypage-tab': {
          templateUrl: 'templates/mypage.html'
        }
      }
    })
    
    .state('tab.send', {
      url: '/send',
      views: {
        'send-tab': {
          templateUrl: 'templates/send.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/inbox');

});

