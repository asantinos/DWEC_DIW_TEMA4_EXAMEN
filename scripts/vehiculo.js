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

    get marca() {
        return this.#marca;
    }

    get modelo() {
        return this.#modelo;
    }

    get color() {
        return this.#color;
    }

    get anioFrabricacion() {
        return this.#anioFabricacion;
    }

    get cilindrada() {
        return this.#cilindrada;
    }

    set marca(marca) {
        this.#marca = marca;
    }

    set modelo(modelo) {
        this.#modelo = modelo;
    }

    set color(color) {
        this.#color = color;
    }

    set anioFrabricacion(anioFabricacion) {
        this.#anioFabricacion = anioFabricacion;
    }

    set cilindrada(cilindrada) {
        this.#cilindrada = cilindrada;
    }
}
