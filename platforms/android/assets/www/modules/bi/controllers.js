angular.module('bi.controllers', [])

.controller('BiCtrl', function($scope) {
	$scope.labels = ['大宁店', '金山店', '三亚凤凰机场','长宁店','虹桥店','张江店','中山公园店'];
	  $scope.series = ['销售额'];

	  $scope.data = [
	    [100,90,80,70,60,50,40]
	  ];
	  
	  $scope.baseLabels = ['大宁店', '金山店', '三亚凤凰机场','长宁店','虹桥店','张江店','中山公园店'];
	    $scope.baseData = [100,90,80,70,60,50,40];
	    $scope.type = 'PolarArea';

	    $scope.toggle = function () {
	      $scope.type = $scope.type === 'PolarArea' ?
	        'Pie' : 'PolarArea';
	    };
});
