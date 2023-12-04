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
