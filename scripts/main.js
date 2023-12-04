/**
 * Autor: Alejandro Santos Garcia
 * Repositorio Github:
 */

import { Vehiculo } from "./vehiculo.js";
import { automovilDeportivo } from "./automovilDeportivo.js";

const resultadoContainer = document.createElement("div");

export function mostrarResultados(mensaje) {
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
    document.body.appendChild(resultadoContainer);
}

const vehiculo1 = new Vehiculo("BMW", "CLK", "rojo", 1992, "2400");
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();
