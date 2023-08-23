

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5edff0df.js","_app/immutable/chunks/scheduler.67eb9944.js","_app/immutable/chunks/index.bf8c410a.js","_app/immutable/chunks/stores.f7cea2ea.js","_app/immutable/chunks/singletons.5482f88d.js","_app/immutable/chunks/paths.82b572ab.js"];
export const stylesheets = [];
export const fonts = [];
