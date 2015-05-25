angular.module('menu.controllers', [])

.controller('MenuCtrl', function($scope,Session) {
	$scope.loginData = Session.loginData;
	
});

