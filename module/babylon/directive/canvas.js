qh.component('babylon', function(ngm, qhm) {
	ngm.directive('babylonCanvas', function() {
		return {
			restrict: 'A',
			scope: {width:'@',height:'@'},
			//templateUrl: qhm.getPath()+"/partial/canvas.html",
			//template: $('<div>'),
			replace: true,
			controller: [
				"$scope",
				"$attrs",
				"$element",
				"$timeout",
				"babylon.factory.core",
				"babylon.factory.camera",
				function($scope, $attrs, $element, $timeout, core, cameraRegister) {
					$timeout(function () {
						// Temporary hack
						//$element.html("");

						var canvas = $element.get(0);
						/*var engine = core.setEngine(new BABYLON.Engine(canvas, true));
						var scene = core.setScene(new BABYLON.Scene(engine));

						// Creating a camera looking to the zero point (0,0,0), a light, and a sphere of size 1
						*/
						var scene = core.initialise(canvas);
						var camera = cameraRegister.setCamera(new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene));
						//var camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
						var light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);
						var origin = BABYLON.Mesh.CreateSphere("origin", 10, 1.0, scene);

						// Attach the camera to the scene
						core.attachSceneCanvas(canvas);

						// Once the scene is loaded, just register a render loop to render it
						core.startRender();
						// Hook up the active camera.
						// If no scene name is provided, use the default.
					});
				}
			]
		};
	});
});
