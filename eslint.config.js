import { readdirSync } from "node:fs";

import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

const featureNames = readdirSync("./src/features", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

/**
 * Fronteras de capa (Clean Architecture). Dependencias permitidas:
 *   App.jsx / main.jsx -> features | components | core
 *   features/<x>       -> components | core   (nunca otra feature ni App/main)
 *   components         -> core                (nunca features ni App/main)
 *   core               -> (nada)
 */
const appEntries = ["./src/App.jsx", "./src/main.jsx"];
const layerZones = [
  { target: "./src/core", from: "./src/components", message: "core no puede depender de components." },
  { target: "./src/core", from: "./src/features", message: "core no puede depender de features." },
  { target: "./src/core", from: appEntries, message: "core no puede depender de la capa app." },
  { target: "./src/components", from: "./src/features", message: "components no puede depender de features." },
  { target: "./src/components", from: appEntries, message: "components no puede depender de la capa app." },
  { target: "./src/features", from: appEntries, message: "features no puede depender de la capa app." },
  ...featureNames.map((name) => ({
    target: `./src/features/${name}`,
    from: featureNames.filter((other) => other !== name).map((other) => `./src/features/${other}`),
    message: "Una feature no puede importar de otra feature.",
  })),
];

export default [
  { ignores: ["dist/**", "node_modules/**"] },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { import: importPlugin },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".js", ".jsx"],
        },
      },
    },
    rules: {
      "react/prop-types": "off",
      "import/no-restricted-paths": ["error", { zones: layerZones }],
      "import/no-cycle": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [{ pattern: "@/**", group: "internal" }],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
        },
      ],
    },
  },
];
