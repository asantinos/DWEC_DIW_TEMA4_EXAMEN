import { Vehiculo } from "./vehiculo";

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
        return "El modo deportivo ha sido activado.";
    }

    getPotenciaMotor() {
        return this.#potenciaMotor;
    }

    setPotenciaMotor(potenciaMotor) {
        this.#potenciaMotor = potenciaMotor;
    }
}
