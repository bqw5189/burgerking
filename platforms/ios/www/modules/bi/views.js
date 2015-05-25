bkchina.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   
  .state('bkchina.menu.home.bi', {
    url: "/bi",
    views: {
	      'home-bi-view': {
	    	  templateUrl: "modules/bi/page.html",
	    	  controller:'BiCtrl'
	      }
	    }
    
  	}) 
});