qh.getModule('application').controller("application.controller.index", [
	"$rootScope", 
	"$location", 
	"$route", 
	function($scope, $location, $routeConfig) {
		$scope.$on('$routeChangeSuccess', function (scope, current, previous) {
			$scope.include = current.include;
		});
		$scope.include = "";
	}
]);
