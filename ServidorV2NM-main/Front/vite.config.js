"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vite.config.ts
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    base: './', // Muy importante para despliegues como GitHub Pages o carpetas estáticas
});
