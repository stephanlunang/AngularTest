var app2 = angular.module('app2', []);

app2.controller('gListCtrl', function($scope){
	$scope.groceries=[
	{item: "Tomatoes", purchased: false},
	{item: "Rice", purchased: false},
	{item: "Beans", purchased: false},
	{item: "Pork", purchased: false}
	];
});