import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.6036dd36.js","_app/immutable/chunks/scheduler.67eb9944.js","_app/immutable/chunks/index.bf8c410a.js","_app/immutable/chunks/paths.82b572ab.js","_app/immutable/chunks/stores.f7cea2ea.js","_app/immutable/chunks/singletons.5482f88d.js"];
export const stylesheets = ["_app/immutable/assets/0.97ee3bb7.css"];
export const fonts = [];
