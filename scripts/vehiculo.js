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
        const mensaje = `
            <h2>Datos del Vehículo</h2>
            <p>Marca: ${this.#marca}</p>
            <p>Modelo: ${this.#modelo}</p>
            <p>Color: ${this.#color}</p>
            <p>Año de fabricación: ${this.#anioFabricacion}</p>
            <br />
        `;

        mostrarResultados(mensaje);
    }

    acelerar(velocidad) {
        const mensaje = `<p>El vehículo ha acelerado hasta ${velocidad}km/h</p>`;

        mostrarResultados(mensaje);
    }

    arrancar() {
        const mensaje = "<p>El vehículo ha arrancado.</p>";

        mostrarResultados(mensaje);
    }

    frenar() {
        const mensaje = "<p>El vehículo ha frenado.</p>";

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

    setarca(marca) {
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
