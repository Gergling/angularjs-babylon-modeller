qh.component('babylon', function(ngm, qhm) {
	ngm.service(qhm.getComponent('factory', 'core').getFullName(), [
		function() {
			var engine, scene, canvas;
			this.setEngine = function (a) {
				engine = a;
				return a;
			};
			this.setScene = function (a) {
				scene = a;
				return a;
			};
			this.startRender = function (preRender, postRender) {
				preRender = preRender || function () {};
				postRender = postRender || function () {};
				engine.runRenderLoop(function () {
					preRender();
					scene.render();
					postRender();
				});
			};
			this.attachSceneCanvas = function (a) {
				canvas = a || canvas;
				scene.activeCamera.attachControl(canvas);
			};
			this.initialise = function (a) {
				canvas = a || canvas;
				this.setEngine(new BABYLON.Engine(canvas, true));
				this.setScene(new BABYLON.Scene(engine));

				// Creating a camera looking to the zero point (0,0,0), a light, and a sphere of size 1
				//cameraRegister.setCamera(new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene));
				return scene;
			};
			this.run = function(codeStr) {
				eval(codeStr);
			};
		}
	])
});
