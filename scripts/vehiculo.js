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

        return datosTexto;
    }

    acelerar(velocidad) {
        return `El vehículo ha acelerado hasta ${velocidad}km/h`;
    }

    arrancar() {
        return "El vehículo ha arrancado.";
    }

    frenar() {
        return "El vehículo ha frenado.";
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

    mostrarResultado(){
        
    }
}
