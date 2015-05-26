angular.module('menu.controllers', [])

.controller('MenuCtrl', function($scope,Session) {
	$scope.loginData = Session.loginData;
	
}).controller('IndexCtrl', function($scope,Session) {
	Chart.defaults.global.animation = !ionic.Platform.isAndroid();
	
});

