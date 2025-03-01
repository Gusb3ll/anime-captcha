// @ts-check

import adapter from "@sveltejs/adapter-vercel";
import path from "node:path";
import preprocess from "svelte-preprocess";

/** @type {Record<string, string>} */
const generatedAliases = {};

["components", "data", "icons", "sections", "styles", "types"].map(
  (ele) => (generatedAliases[`$${ele}`] = path.resolve(`src/${ele}`))
);

/** @type {import("@sveltejs/kit").Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: generatedAliases,
  },
};
