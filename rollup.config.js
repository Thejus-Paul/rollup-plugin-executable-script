import path from "path";

import cleaner from "rollup-plugin-cleaner";
import analyze from "rollup-plugin-analyzer";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";

const formats = ["es", "cjs"];

const output = formats.map((format) => ({
  file: format === "es" ? "dist/index.js" : "dist/index.cjs.js",
  format,
  name: "neetoAudit",
}));

export default {
  input: "./lib/rollup-plugin-executable-script.js",
  output,
  plugins: [
    // To clean dist directory.
    cleaner({ targets: [path.resolve("./dist")] }),
    // Analyze created bundle.
    analyze({ summaryOnly: true }),
    // Locates third party modules in node_modules.
    nodeResolve({ exportConditions: ["node"] }),
    // To convert CommonJS modules to ES6.
    commonjs({ include: /node_modules/ }),
    // To convert .json files to ES6 modules.
    json(),
  ],
};
