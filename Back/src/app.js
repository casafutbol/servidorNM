"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var sqlite3_1 = require("sqlite3");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.resolve('public')));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.resolve('public/index.html'));
});
var db = new sqlite3_1.default.Database(path_1.default.resolve('db', 'novomilladoiro.db'), function (err) {
    if (err) {
        console.error('Error en DB:', err.message);
    }
    else {
        console.log('Base SQLite conectada');
    }
});
app.post('/guardar-usuario', function (req, res) {
    var _a = req.body, nombre = _a.nombre, email = _a.email;
    var sql = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';
    db.run(sql, [nombre, email], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Error al guardar usuario' });
            return;
        }
        res.json({ mensaje: 'Usuario guardado', id: this.lastID });
    });
});
exports.default = app;
