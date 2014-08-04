qh.setModule("application", {
	app: true,
	require: [
		//"collection",
		//"game",
		"command",
		"babylon",
		"ace"
	],
	controller: [
		"index"
	],
	factory: [
		"navigation",
		"uid",
	],
	config: [
		"index"
	],
});
