qh.component('ace', function(ngm, qhm) {
	ngm.directive('commandRow', function() {
		return {
			restrict: 'A',
			//scope: {width:'@',height:'@'},
			templateUrl: qhm.getPath()+"/partial/command.html",
			controller: [
				"$scope",
				function($scope) {
					$scope.refresh = function () {
						// Reload canvas models using editor code to generate them.
						// Get editor content
						// Load into scene generation
					};
				}
			]
		};
	});
});
