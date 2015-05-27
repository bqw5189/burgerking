angular.module('bi.controllers', [])
.controller('BiMapCtrl', function($scope) {
	var map = new BMap.Map("allmap");
	
	function myFun(result){
		map.centerAndZoom(result.center,result.level);
		
		//seach bk
		var options = {
				onSearchComplete: function(results){
					// 判断状态是否正确
					if (local.getStatus() == BMAP_STATUS_SUCCESS){
						var s = [];
						for (var i = 0; i < results.getCurrentNumPois(); i ++){
							s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
							console.log(results.getPoi(i).point.lng + ", " + results.getPoi(i).address);
							var marker = new BMap.Marker(results.getPoi(i).point);
							map.addOverlay(marker);
							var label = new BMap.Label(results.getPoi(i).title+" SALES:100 TC:100 ",{offset:new BMap.Size(20,-10)});
							marker.setLabel(label); //添加百度label
						}
						
					}
				}
			};
		
		var local = new BMap.LocalSearch(map, options);
		local.search("汉堡王");
	}
	
	var myCity = new BMap.LocalCity();
	myCity.get(myFun);
})
.controller('BiCtrl', function($scope,$ionicPopover) {
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
	  
	  $scope.$on("$ionicView.enter",function(){
		  $scope.baseLabels = ['大宁店', '金山店', '三亚凤凰机场','长宁店','虹桥店','张江店','中山公园店'];
	  })
	  
	// .fromTemplate() method
	  var template = '<ion-popover-view ><ion-content><ion-list>'+
	  '<ion-item class="item-icon-left" ng-href="#"><i class="icon ion-social-usd-outline"></i>Sales</ion-item>'+
	  '<ion-item class="item-icon-left" ng-href="#"><i class="icon ion-ios-people-outline"></i>TC</ion-item>'+
	  '<ion-item class="item-icon-left" ng-href="#"><i class="icon ion-ios-calculator-outline"></i>AC</ion-item>'+
	  '<ion-item class="item-icon-left" ng-href="#"><i class="icon ion-ios-grid-view-outline"></i>Tables</ion-item>'+
	  '<ion-item class="item-icon-left" ng-href="#"></ion-item>'+
	  '</ion-list></ion-content></ion-popover-view>';

	  $scope.popover = $ionicPopover.fromTemplate(template, {
	    scope: $scope
	  });

	  $scope.openPopover = function($event) {
	    $scope.popover.show($event);
	  };
	  $scope.closePopover = function() {
	    $scope.popover.hide();
	  };
	  //Cleanup the popover when we're done with it!
	  $scope.$on('$destroy', function() {
	    $scope.popover.remove();
	  });
	  // Execute action on hide popover
	  $scope.$on('popover.hidden', function() {
	    // Execute action
	  });
	  // Execute action on remove popover
	  $scope.$on('popover.removed', function() {
	    // Execute action
	  });
	   
});
