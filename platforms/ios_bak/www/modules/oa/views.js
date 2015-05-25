bkchina.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   
  .state('bkchina.menu.home.oa', {
    url: "/oa",
    views: {
	      'home-oa-view': {
	    	  templateUrl: "modules/oa/page.html",
	    	  controller:'OaCtrl'
	      }
	    }
    
  	}) 
});