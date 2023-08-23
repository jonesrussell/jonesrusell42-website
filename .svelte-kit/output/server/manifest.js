export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "jonesrussell42-website/_app",
	assets: new Set([".nojekyll","cartoon-russell.jpg","favicon.png","ftcolorpicker.svg","laravel-ar21.svg","nodejs-development-services.webp","robots.txt","svelte-logo.svg","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.c07db683.js","app":"_app/immutable/entry/app.9bbe8fd7.js","imports":["_app/immutable/entry/start.c07db683.js","_app/immutable/chunks/scheduler.67eb9944.js","_app/immutable/chunks/singletons.5482f88d.js","_app/immutable/chunks/paths.82b572ab.js","_app/immutable/entry/app.9bbe8fd7.js","_app/immutable/chunks/scheduler.67eb9944.js","_app/immutable/chunks/index.bf8c410a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
