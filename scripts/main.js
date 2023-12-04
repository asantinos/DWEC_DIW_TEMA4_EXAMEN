/**
 * Autor: Alejandro Santos Garcia
 * Repositorio Github:
 */

import { Vehiculo } from "./vehiculo.js";
import { automovilDeportivo } from "./automovilDeportivo.js";

const container = document.querySelector(".container");
const resultadoContainer = document.createElement("div");
resultadoContainer.className = "resultadoContainer";
container.appendChild(resultadoContainer);

export function mostrarResultados(mensaje) {
    resultadoContainer.innerHTML += `${mensaje}`;
}

mostrarResultados("<br /> --- VEHÍCULOS ---");
const vehiculo1 = new Vehiculo("BMW", "CLK", "rojo", 1992, "2400");
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

const vehiculoObject = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    anioFabricacion: vehiculo1.anioFabricacion,
    cilindrada: vehiculo1.cilindrada,
};

localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));

// const datosVehiculo = localStorage.getItem("vehiculo");
// console.log(datosVehiculo);

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

const deportivoObject = {
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    anioFabricacion: deportivo1.anioFabricacion,
    cilindrada: deportivo1.cilindrada,
    potenciaMotor: deportivo1.potenciaMotor,
};

for (let key in deportivoObject) {
    if (deportivoObject.hasOwnProperty(key)) {
        localStorage.setItem(key, deportivoObject(key));
    }
}

localStorage.removeItem(deportivoObject.cilindrada);
localStorage.removeItem(deportivoObject.potenciaMotor);

localStorage.clear();
