import { mostrarResultados } from "./main.js";

export class Vehiculo {
    #marca;
    #modelo;
    #color;
    #anioFabricacion;
    #cilindrada;

    constructor(marca, modelo, color, anioFabricacion, cilindrada) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#anioFabricacion = anioFabricacion;
        this.#cilindrada = cilindrada;
    }

    mostrarDatos() {
        let datosTexto = `
            <h1>Datos del Vehículo</h1>
            <p>Marca: ${this.#marca}</p>
            <p>Modelo: ${this.#modelo}</p>
            <p>Color: ${this.#color}</p>
            <p>Año de fabricación: ${this.#anioFabricacion}</p>
        `;

        mostrarResultados(datosTexto);
    }

    acelerar(velocidad) {
        const mensaje = `El vehículo ha acelerado hasta ${velocidad}km/h`;

        mostrarResultados(mensaje);
    }

    arrancar() {
        const mensaje = "El vehículo ha arrancado.";

        mostrarResultados(mensaje);
    }

    frenar() {
        const mensaje = "El vehículo ha frenado.";

        mostrarResultados(mensaje);
    }

    getMarca() {
        return this.#marca;
    }

    getModelo() {
        return this.#modelo;
    }

    getColor() {
        return this.#color;
    }

    getAnioFrabricacion() {
        return this.#anioFabricacion;
    }

    getCilindrada() {
        return this.#cilindrada;
    }

    setMarca(marca) {
        this.#marca = marca;
    }

    setModelo(modelo) {
        this.#modelo = modelo;
    }

    setColor(color) {
        this.#color = color;
    }

    setAnioFrabricacion(anioFabricacion) {
        this.#anioFabricacion = anioFabricacion;
    }

    setCilindrada(cilindrada) {
        this.#cilindrada = cilindrada;
    }
}
