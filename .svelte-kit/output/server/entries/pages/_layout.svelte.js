import { c as create_ssr_component, b as add_attribute, e as escape, d as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
import { p as page } from "../../chunks/stores.js";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
const app = "";
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ],
    " "
  );
}
const fa_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$1);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id || void 0, 0)} class="${[
    "svelte-fa " + escape(clazz, true) + " svelte-1cj2gr0",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", s, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : ` <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path> <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"><div class="container px-4 mx-auto flex flex-wrap items-center justify-between max-w-screen-lg"><div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"><a class="${[
    "text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white",
    ($page.url.pathname !== "/" ? "md:inline-block" : "") + " " + ($page.url.pathname === "/" ? "hidden" : "") + " " + ($page.url.pathname === "/" ? "animate-grow" : "")
  ].join(" ").trim()}" href="${escape(base, true) + "/"}" data-svelte-h="svelte-fcwtvx"><img src="${escape(base, true) + "/cartoon-russell.jpg"}" alt="Logo" class="rounded-full logo" style="width:75px;height:75px;"></a><button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">${validate_component(Fa, "Fa").$$render($$result, { icon: faBars, class: "text-white" }, {}, {})}</button></div> <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden" id="collapse-navbar"><ul class="flex flex-col lg:flex-row list-none mr-auto"><li class="flex items-center"><a class="${[
    "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    $page.url.pathname === "/projects" ? "selected" : ""
  ].join(" ").trim()}" href="${escape(base, true) + "/projects"}">${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      icon: faProjectDiagram,
      class: "lg:text-gray-300 text-gray-500 text-lg leading-lg mr-2"
    },
    {},
    {}
  )}
						Past Projects</a></li></ul> <ul class="flex flex-col lg:flex-row list-none lg:ml-auto"><li class="flex items-center"><a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" target="_blank" href="https://linkedin.com/in/jonesrussell42" rel="noreferrer">${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      icon: faLinkedin,
      class: "lg:text-gray-300 text-gray-500 text-lg leading-lg"
    },
    {},
    {}
  )}<span class="lg:hidden inline-block ml-2" data-svelte-h="svelte-1822u56">LinkedIn</span></a></li> <li class="flex items-center"><a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" target="_blank" rel="noreferrer" href="https://twitter.com/jonesrussell42">${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      icon: faTwitter,
      class: "lg:text-gray-300 text-gray-500 text-lg leading-lg "
    },
    {},
    {}
  )}<span class="lg:hidden inline-block ml-2" data-svelte-h="svelte-cf6n2v">Twitter</span></a></li> <li class="flex items-center"><a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" target="_blank" rel="noreferrer" href="https://github.com/jonesrussell">${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      icon: faGithub,
      class: "lg:text-gray-300 text-gray-500 text-lg leading-lg "
    },
    {},
    {}
  )}<span class="lg:hidden inline-block ml-2" data-svelte-h="svelte-1nrtxft">Github</span></a></li></ul></div></div></nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".link.svelte-18mg1xt{display:block;padding-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;font-weight:600;--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity))\n}.link.svelte-18mg1xt:hover{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))\n}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year } = $$props;
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  $$result.css.add(css);
  return `<footer class="relative bg-gray-300 pt-8 pb-6"><div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style="height: 80px; transform: translateZ(0px);" data-svelte-h="svelte-1287e20"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div> <div class="container mx-auto px-4"><div class="flex flex-wrap"><div class="w-full lg:w-6/12 px-4 py-8"><h4 class="text-3xl font-semibold" data-svelte-h="svelte-1jf6y8c">Get in touch!</h4> <h5 class="text-lg mt-0 mb-2 text-gray-700" data-svelte-h="svelte-8y49y7">Find me on any of these platforms.</h5> <div class="mt-6"><a href="https://linkedin.com/in/jonesrussell" rel="external"><button aria-label="Linked In" class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">${validate_component(Fa, "Fa").$$render($$result, { icon: faLinkedin, class: "flex" }, {}, {})}</button></a> <a href="https://twitter.com/jonesrussell" rel="external"><button aria-label="Twitter" class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">${validate_component(Fa, "Fa").$$render($$result, { icon: faTwitter, class: "flex" }, {}, {})}</button></a> <a href="https://github.com/jonesrussell" rel="external"><button aria-label="Github" class="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">${validate_component(Fa, "Fa").$$render($$result, { icon: faGithub, class: "flex" }, {}, {})}</button></a></div></div> <div class="w-full lg:w-6/12 px-4" data-svelte-h="svelte-1n18dtk"><div class="flex flex-wrap items-top mb-6"><div class="w-full lg:w-4/12 px-4"><span class="block uppercase text-gray-800 text-sm font-semibold mb-2">Helpful Links</span> <ul class="list-unstyled"><li><a href="https://roadmap.sh/" rel="external" title="Awesome developer roadmaps" class="link svelte-18mg1xt">Developer Roadmaps</a></li> <li><a href="https://www.creative-tim.com/" rel="external" title="Fully Coded UI Tools to create web and mobile apps" class="link svelte-18mg1xt">Creative Tim</a></li></ul></div></div></div></div> <hr class="my-6 border-gray-400"> <div class="flex flex-wrap items-center md:justify-between justify-center"><div class="w-full md:w-4/12 px-4 mx-auto text-center"><div class="text-sm text-gray-800 font-semibold py-1">©
					${escape(year)}
					Russell Jones</div></div></div></div> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <section class="relative block hero-home"></section> <main class="relative sasquatch"><div class="container mx-auto px-4 max-w-screen-lg m-10 py-10"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"><div class="px-6 py-6">${slots.default ? slots.default({}) : ``}</div></div></div></main> ${validate_component(Footer, "Footer").$$render($$result, { year }, {}, {})}`;
});
export {
  Layout as default
};
