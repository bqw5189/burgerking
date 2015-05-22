bkchina.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('bkchina.menu', {
    url: "/menu",
    templateUrl: "modules/menu/page.html",
    controller:'MenuCtrl'
  }) 
//  $urlRouterProvider.when('/','/subscribe/list');
});