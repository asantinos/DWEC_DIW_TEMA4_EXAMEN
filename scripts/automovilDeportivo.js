import { mostrarResultados } from "./main.js";
import { Vehiculo } from "./vehiculo.js";

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
        super(marca, modelo, color, anioFabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }

    activarMotorDeportivo() {
        const mensaje = "<p>El modo deportivo ha sido activado.</p>";
        mostrarResultados(mensaje);
    }

    getPotenciaMotor() {
        return this.#potenciaMotor;
    }

    setPotenciaMotor(potenciaMotor) {
        this.#potenciaMotor = potenciaMotor;
    }
}
