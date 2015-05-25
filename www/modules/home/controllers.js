angular.module('home.controllers', [])

.controller('HomeCtrl', function($scope) {
}).controller('HistoryCtrl', function($scope, $ionicModal, $ionicPopup,HistoryDatas,Session) {

	 // Create the login modal that we will use later
	  $ionicModal.fromTemplateUrl('modules/home/login.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modal = modal;
	    if (!Session.isLogin){
			 $scope.modal.show();
		  }
	  });

	  // Triggered in the login modal to close it
	  $scope.closeLogin = function() {
		  Session.isLogin = true;
	    $scope.modal.hide();
	  };

	  // Open the login modal
	  $scope.login = function() {
	    $scope.modal.show();
	  };
	  
	  $scope.doLogin = function(isValid) {
		  if (!isValid) {
			  $ionicPopup.alert({
			     title: 'Error!',
			     template: 'Please Input Form!'
			   });
	      }else{
			  Session.isLogin = true;
			  Session.loginData=$scope.loginData;
			  $scope.modal.hide();
		  }
	  };
	
	$scope.historys = [ HistoryDatas[0], HistoryDatas[1] ];
	
	$scope.loadMore = function() {
		if ($scope.historys.length < HistoryDatas.length) {
			$scope.historys.push(HistoryDatas[$scope.historys.length]);
		}
		$scope.$broadcast('scroll.infiniteScrollComplete');
	};

	$scope.moreDataCanBeLoaded = function() {
		return $scope.historys.length < HistoryDatas.length;
	}
	
	$scope.$on('$stateChangeSuccess', function() {
		$scope.loadMore();
	});

	$scope.$on('onRepeatLast', function(scope, element, attrs) {
		$scope.swipebox = $(".swipebox").swipebox();
	});

});
