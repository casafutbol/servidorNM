"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("../index.css"); // Asumiendo que index.css está en la raíz de Front/
var App = function () { return (<div className="container">
    <h1>Asociación Empresarios Novo Milladoiro</h1>

    <iframe width="640" height="360" src="https://www.youtube.com/embed/y4QNG7W7TV4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

    <p>Haz clic en el siguiente enlace para visitar el sitio</p>
    <button>
      <a href="https://aenovomilladoiro.com/es/inicio/" target="_blank" rel="noopener noreferrer">
        Ir al sitio
      </a>
    </button>
  </div>); };
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(<App />);
