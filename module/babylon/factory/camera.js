qh.component('babylon', function(ngm, qhm) {
	ngm.service(qhm.getComponent('factory', 'camera').getFullName(), [
		function() {
			var list = {}, active;
			this.setCamera = function(a, b) {
				var name = "default", camera;
				if (angular.isString(a)) {
					name = a;
					camera = b;
				} else {
					camera = a;
				}
				list[name] = camera;
				if (!active) {
					active = camera;
				}
				return camera;
			};
		}
	])
});
