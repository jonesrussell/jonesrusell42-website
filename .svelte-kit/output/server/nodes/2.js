

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.bdd807eb.js","_app/immutable/chunks/scheduler.67eb9944.js","_app/immutable/chunks/index.bf8c410a.js","_app/immutable/chunks/paths.82b572ab.js"];
export const stylesheets = ["_app/immutable/assets/2.e61b12b1.css"];
export const fonts = [];
