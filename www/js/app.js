// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var bkchina = angular.module('bkchina', ['ionic','chieffancypants.loadingBar', "chart.js",'menu.controllers','home.controllers','bi.controllers','oa.controllers'])
.directive('onLastRepeat', function() {
        return function(scope, element, attrs) {
            if (scope.$last) setTimeout(function(){
                scope.$emit('onRepeatLast', element, attrs);
            }, 1);
        };
    })
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) { 
	$stateProvider
    .state('bkchina', {
	    url: "/bkchina",
	    templateUrl: "index.html",
	    controller:'IndexCtrl'
	  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/bkchina/menu/home/history');
})  .config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
});
