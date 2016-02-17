var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope){
	$scope.first = 1;
	$scope.second = 1;

	$scope.updateValue = function(){
		$scope.calculation = $scope.first + '+' + $scope.second + " = " + (+$scope.first + +$scope.second)
	};
});


app1.controller('Names', function($scope){
	var Names = ['Stephan', 'Robert', 'Patricia', 'Jessica'];

	$scope.names = Names[Math.floor((Math.random()*4))];
});