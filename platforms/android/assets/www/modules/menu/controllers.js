angular.module('menu.controllers', [])

.controller('MenuCtrl', function($scope,Session) {
	Chart.defaults.global.animation = !ionic.Platform.isAndroid();
	
	$scope.loginData = Session.loginData;
	
	$scope.$on("BUSY", function(){        
		 $ionicLoading.show({
	      template: 'Loading...'
	    });
	});
	$scope.$on("NOTBUSY", function(){        
		$ionicLoading.hide();
	});
	
});

