qh.setModule("application", {
	app: true,
	require: [
		//"collection",
		//"game",
		//"object",
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
