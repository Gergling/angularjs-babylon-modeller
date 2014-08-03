qh.component('babylon', function(ngm, qhm) {
	ngm.service(qhm.getComponent('factory', 'core').getFullName(), [
		function() {
			var engine, scene;
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
			this.attachSceneCanvas = function (canvas) {
				scene.activeCamera.attachControl(canvas);
			};
		}
	])
});
