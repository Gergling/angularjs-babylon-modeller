qh.component('ace', function(ngm, qhm) {
	ngm.directive('editor', function() {
		var $template = $("<div id='editor'></div>");
		return {
			restrict: 'A',
			scope: {width:'@',height:'@'},
			template: $template,
			//templateUrl: qhm.getPath()+"/partial/editor.html",
			controller: [
				"$scope",
				"$attrs",
				"$element",
				"$timeout",
				"ace.factory.core",
				function($scope, $attrs, $element, $timeout, core) {
					$timeout(function () {
						var editor = ace.edit("editor");
						core.editor = editor;
						$(editor.container).height(300);
						editor.setTheme("ace/theme/monokai");
						editor.getSession().setMode("ace/mode/javascript");
						var vars = [];
						editor.setValue("// Available variables include: " + vars.join(", ") + "\n" + [
							'var light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);',
							'var origin = BABYLON.Mesh.CreateSphere("origin", 10, 1.0, scene);'
						].join("\n"));
					});
				}
			]
		};
	});
});
