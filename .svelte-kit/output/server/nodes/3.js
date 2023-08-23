

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e9597895.js","_app/immutable/chunks/scheduler.67eb9944.js","_app/immutable/chunks/index.bf8c410a.js"];
export const stylesheets = [];
export const fonts = [];
