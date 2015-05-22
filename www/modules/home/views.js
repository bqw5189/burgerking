bkchina.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('bkchina.menu.home', {
    url: "/home",
    views: {
	      'menuContent': {
	    	  templateUrl: "modules/home/page.html",
	    	  controller:'HomeCtrl'
	      }
	    }
  })
  .state('bkchina.menu.home.history', {
    url: "/history",
    views: {
	      'home-history-view': {
	    	  templateUrl: "modules/home/history.html",
	    	  controller:'HistoryCtrl'
	      }
	    }
    
  	}) 
});