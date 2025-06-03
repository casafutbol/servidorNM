"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Cargar variables de entorno desde el archivo .env
require("dotenv/config"); // o: import dotenv from 'dotenv'; dotenv.config();
var express_1 = require("express");
var path = require("path");
var app = (0, express_1.default)();
// Leer el puerto desde .env (con fallback a 3000)
var PORT = process.env.PORT || 3000;
// Servir archivos estáticos (ajusta si usas otra ruta)
var publicDir = path.join(__dirname, 'public');
app.use(express_1.default.static(publicDir));
// Ruta principal de ejemplo
app.get('/', function (req, res) {
    res.send("\n    <html>\n      <head><title>Servidor B\u00E1sico</title></head>\n      <body>\n        <h1>Servidor en funcionamiento</h1>\n        <p>\u00A1Hola, mundo!</p>\n      </body>\n    </html>\n  ");
});
// Iniciar servidor
app.listen(PORT, function () {
    console.log("Servidor corriendo en http://localhost:".concat(PORT));
});
