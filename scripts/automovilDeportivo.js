import { mostrarResultados } from "./main.js";
import { Vehiculo } from "./vehiculo.js";

// Herencia de la clase Vehiculo
export class automovilDeportivo extends Vehiculo {
    #potenciaMotor;

    constructor(
        marca,
        modelo,
        color,
        anioFabricacion,
        cilindrada,
        potenciaMotor
    ) {
        // super para llamar a los atributos de la clase padre
        super(marca, modelo, color, anioFabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }

    mostrarDatos() {
        const mensaje = `
            <h2>Datos del Automóvil Deportivo</h2>
            <p>Marca: ${this.marca}</p>
            <p>Modelo: ${this.modelo}</p>
            <p>Color: ${this.color}</p>
            <p>Año de fabricación: ${this.anioFabricacion}</p>
            <p>Cilindrada: ${this.cilindrada}</p>
            <p>Potencia del motor: ${this.#potenciaMotor}</p>
            <br />
        `;

        mostrarResultados(mensaje);
    }

    activarMotorDeportivo() {
        const mensaje = "<p>El modo deportivo ha sido activado.</p>";
        mostrarResultados(mensaje);
    }

    get potenciaMotor() {
        return this.#potenciaMotor;
    }

    set potenciaMotor(potenciaMotor) {
        this.#potenciaMotor = potenciaMotor;
    }
}
