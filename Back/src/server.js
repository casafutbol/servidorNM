"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fs_1 = require("fs");
var path_1 = require("path");
var app = (0, express_1.default)();
var publicPath = path_1.default.resolve('public');
var archivoDatos = path_1.default.resolve('datos.json');
app.use(express_1.default.static(publicPath));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Mostrar formulario al acceder a /
app.get('/', function (_req, res) {
    res.sendFile(path_1.default.join(publicPath, 'formulario.html'));
});
// Procesar datos enviados por el formulario
app.post('/procesar-formulario', function (req, res) {
    var nuevoDato = req.body;
    // Leer datos existentes (si el archivo existe)
    var datos = [];
    if (fs_1.default.existsSync(archivoDatos)) {
        var contenido = fs_1.default.readFileSync(archivoDatos, 'utf-8');
        datos = JSON.parse(contenido);
    }
    // Añadir nuevo dato
    datos.push(nuevoDato);
    // Guardar de nuevo el archivo con el nuevo dato añadido
    fs_1.default.writeFileSync(archivoDatos, JSON.stringify(datos, null, 2));
    console.log('Datos guardados:', nuevoDato);
    res.send('Datos guardados en archivo JSON correctamente');
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Servidor escuchando en http://localhost:".concat(PORT));
});
exports.default = app;
