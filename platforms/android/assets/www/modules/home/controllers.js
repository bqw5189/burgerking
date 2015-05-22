angular.module('home.controllers', [])

.controller('HomeCtrl', function($scope) {

}).controller('HistoryCtrl', function($scope, HistoryDatas) {
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
