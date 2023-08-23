import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
const variables = {
  bellCreekUrl: {}.VITE_BELL_CREEK_URL
};
const contentBrowser_svelte_svelte_type_style_lang = "";
const css = {
  code: ".screenshot.svelte-1r47bd8.svelte-1r47bd8{--transform:rotate3d(0.5, -0.866, 0, 19deg);--shadow:34.3px 62.5px 125px -25px rgba(50, 50, 93, 0.5),\n			20.6px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);--lighting-angle:300deg}.screenshot.svelte-1r47bd8 .image-container.svelte-1r47bd8{transform:var(--transform);box-shadow:var(--shadow);transition-property:transform, box-shadow;transition-duration:0.25s;transition-timing-function:cubic-bezier(0.165, 0.84, 0.44, 1)}",
  map: null
};
const Content_browser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Awesome Features" } = $$props;
  let { subtitle = "Awesome Features<br />for Everyone to Enjoy." } = $$props;
  let { cta = "View All Features" } = $$props;
  let { href = "#" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.cta === void 0 && $$bindings.cta && cta !== void 0)
    $$bindings.cta(cta);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css);
  return `<div class="px-8 my-4 mx-auto pb-8 flex items-center min-w-screen bg-white"><div class="relative md:w-1/2 h-full pl-12"><p class="text-sm uppercase font-bold text-indigo-500 tracking-wide">${escape(title)}</p> <h2 class="text-4xl font-bold text-gray-900 mt-5 leading-tight"><!-- HTML_TAG_START -->${subtitle}<!-- HTML_TAG_END --></h2> <p class="text-gray-800 text-base mt-3 pr-4">${slots.default ? slots.default({}) : ``}</p> <a${add_attribute("href", href, 0)} class="underline font-medium flex items-center text-indigo-500 mt-8"><span>${escape(cta)}</span> <svg class="w-4 h-4 ml-1 mt-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div> <div class="w-1/2 screenshot svelte-1r47bd8"><div class="flex flex-col overflow-hidden shadow-2xl rounded-lg image-container svelte-1r47bd8"><div class="h-8 bg-gray-900 text-white flex items-center" data-svelte-h="svelte-mbj851"><div class="w-3 h-3 rounded-full ml-3 bg-red-400"></div> <div class="w-3 h-3 rounded-full ml-2 bg-yellow-400"></div> <div class="w-3 h-3 rounded-full ml-2 bg-green-400"></div></div> ${slots.media ? slots.media({}) : ``}</div></div> </div>`;
});
function load() {
  const href = variables.bellCreekUrl;
  return { props: { href } };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `${$$result.head += `<!-- HEAD_svelte-1r1pbcd_START -->${$$result.title = `<title>Past Projects | Full Stack Developer</title>`, ""}<!-- HEAD_svelte-1r1pbcd_END -->`, ""} <header data-svelte-h="svelte-7n0v9k"><h1>Past Projects</h1></header> <section>${validate_component(Content_browser, "ContentBrowser").$$render(
    $$result,
    {
      title: "Interactive Animation",
      subtitle: "Beautiful SVG",
      cta: "Enlarge",
      href
    },
    {},
    {
      media: () => {
        return `<span slot="media"><iframe${add_attribute("src", href, 0)} title="SVG Animation" class="w-full h-64 overflow-hidden"></iframe></span>`;
      },
      default: () => {
        return `Learn how gold is processed from ore into dore bars in this interacive animation with embedded video.`;
      }
    }
  )}</section>`;
});
export {
  Page as default,
  load
};
