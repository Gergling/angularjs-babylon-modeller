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
				"babylon.factory.core",
				"babylon.factory.camera",
				function($scope, $attrs, $element, $timeout, core, cameraRegister) {
					$timeout(function () {
						var editor = ace.edit("editor");
						$(editor.container).height(300);
						editor.setTheme("ace/theme/monokai");
						editor.getSession().setMode("ace/mode/javascript");
						var vars = [];
						editor.setValue("stuff // Available variables include: " + vars.join(", ") + "\n");
					});
				}
			]
		};
	});
});
