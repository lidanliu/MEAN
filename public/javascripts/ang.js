(function(){
	var app = angular.module('ngmodel', []);
		
	app.controller('NgController',function($scope,$http){
		$http.get( "/api/users").success(function( data ) {
			$scope.allusers= data; //from your sample;
		});
		$scope.models = gem;
	});
	
	var gem = [
		{
			name: 'gem name',
			price: 2.44,
			description: 'aaa'
		},
		{
			name: 'gem name2',
			price: 2.11,
			description: 'bbb'
		}
	];
})();