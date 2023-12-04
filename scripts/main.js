/**
 * Autor: Alejandro Santos Garcia
 * Repositorio Github: https://github.com/asantinos/DWEC_DIW_TEMA4_EXAMEN
 */

import { Vehiculo } from "./vehiculo.js";
import { automovilDeportivo } from "./automovilDeportivo.js";

const container = document.querySelector(".container");
const resultadoContainer = document.createElement("div");
resultadoContainer.className = "resultadoContainer";
container.appendChild(resultadoContainer);

// Agregará los mensajes a resultadosContainer
export function mostrarResultados(mensaje) {
    // Dejamos solamente el mensaje sin etiquetas HTML, porque ya las tendrá cada mensaje en su función
    resultadoContainer.innerHTML += `${mensaje}`;
}

// VEHICULOS
mostrarResultados("<br /> --- VEHÍCULOS ---");
const vehiculo1 = new Vehiculo("BMW", "CLK", "rojo", 1992, "2400");
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

// Asignamos los valores del vehiculo1
const vehiculoObject = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    anioFabricacion: vehiculo1.anioFabricacion,
    cilindrada: vehiculo1.cilindrada,
};

localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));

console.log(JSON.parse(localStorage.getItem("vehiculo")));

// DEPORTIVOS
mostrarResultados("<br /> --- DEPORTIVOS ---");
const deportivo1 = new automovilDeportivo(
    "Ferrari",
    "Spider",
    "amarillo",
    2020,
    "4000",
    "500"
);
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar();

// Asignamos los valores de deportivo1
const deportivoObject = {
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    anioFabricacion: deportivo1.anioFabricacion,
    cilindrada: deportivo1.cilindrada,
    potenciaMotor: deportivo1.potenciaMotor,
};

// Utilizamos un bucle for para iterar sobre cada propiedad del objeto
// Así almacenamos cada propiedad en el localStorage individualmente
for (let key in deportivoObject) {
    if (deportivoObject.hasOwnProperty(key)) {
        localStorage.setItem(key, JSON.stringify(deportivoObject[key]));
    }
}

// Eliminamos dos propiedades almacenadas en el localStorage de deportivoObject
localStorage.removeItem("marca");
localStorage.removeItem("cilindrada");

// Eliminamos todos los datos del localStorage (comentado para poder ver los datos)
// localStorage.clear();
