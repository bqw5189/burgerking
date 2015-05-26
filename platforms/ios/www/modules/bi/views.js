bkchina.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   
  .state('bkchina.menu.home.bi', {
    url: "/bi",
    views: {
	      'home-bi-view': {
	    	  templateUrl: "modules/bi/page.html"
	      }
	    }
    
  	})
  	.state('bkchina.menu.home.bi.list', {
  	    url: "/list",
  	    templateUrl: "modules/bi/list.html"
  	 }) 
  	 .state('bkchina.menu.home.bi.daily-sales-report', {
  	    url: "/daily-sales-report",
  	    templateUrl: "modules/bi/daily-sales-report.html",
  	    controller:"BiCtrl"
  	    
  	 })
  	
});