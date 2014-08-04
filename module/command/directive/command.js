qh.component('command', function(ngm, qhm) {
	ngm.directive('commandRow', function() {
		return {
			restrict: 'A',
			//scope: {width:'@',height:'@'},
			templateUrl: qhm.getPath()+"/partial/command.html",
			controller: [
				"$scope",
				"babylon.factory.core",
				"ace.factory.core",
				"babylon.factory.camera",
				function($scope, babylonCore, aceCore, cameraRegister) {
					$scope.refresh = function () {
						// Reload canvas models using editor code to generate them.
						var scene = babylonCore.initialise();
						var camera = cameraRegister.setCamera(new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene));

						// Get editor content
						babylonCore.run(aceCore.editor.getValue());

						// Load into scene generation
						babylonCore.attachSceneCanvas();
					};
				}
			]
		};
	});
});
