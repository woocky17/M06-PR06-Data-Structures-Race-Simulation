export default class Participante {
  constructor(nombre, vehiculo) {
    this.nombre = nombre;
    this.vehiculo = vehiculo;
    this.estadisticas = {
      1: 0, // Número de veces que ha quedado 1º
      2: 0, // Número de veces que ha quedado 2º
      3: 0, // Número de veces que ha quedado 3º
      otros: 0,
    };
  }

  actualizarEstadisticas(posicion) {
    if (posicion === 1) this.estadisticas[1]++;
    else if (posicion === 2) this.estadisticas[2]++;
    else if (posicion === 3) this.estadisticas[3]++;
    else this.estadisticas.otros++;
  }

  verEstadisticas() {
    return this.estadisticas;
  }
}

import { Moto, Coche } from "./Vehiculo";

export let participantes = [
  new Participante("Juan Pérez", new Coche("Toyota Supra", "media", 20, 10)),
  new Participante("Ana López", new Moto("Honda Civic", "dura", 18, 8)),
  new Participante(
    "Carlos Sánchez",
    new Coche("Ford Mustang", "blanda", 25, 12)
  ),
];
