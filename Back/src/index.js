"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1.default)();
// Servir archivos estáticos desde la carpeta public
app.use(express_1.default.static(path_1.default.resolve('public')));
// Enviar el archivo index.html cuando accedas a la raíz "/"
app.get('/', function (req, res) {
    res.sendFile(path_1.default.resolve('public/index.html'));
});
exports.default = app;
