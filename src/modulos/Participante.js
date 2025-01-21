export default class Participante {
  constructor(nombre, vehiculo) {
    this._nombre = nombre;
    this._vehiculo = vehiculo;
    this._posicion = 0;
    this._estadisticas = {
      1: 0, // Número de veces que ha quedado 1º
      2: 0, // Número de veces que ha quedado 2º
      3: 0, // Número de veces que ha quedado 3º
      otros: 0, // Número de veces que ha quedado en otras posiciones
    };
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get vehiculo() {
    return this._vehiculo;
  }

  set vehiculo(value) {
    this._vehiculo = value;
  }

  get tipoVehiculo() {
    return this._tipoVehiculo;
  }

  set tipoVehiculo(value) {
    this._tipoVehiculo = value;
  }

  get posicion() {
    return this._posicion;
  }

  set posicion(value) {
    this._posicion = value;
  }

  get estadisticas() {
    return this._estadisticas;
  }

  actualizarEstadisticas(posicion) {
    if (posicion === 1) this._estadisticas[1]++;
    else if (posicion === 2) this._estadisticas[2]++;
    else if (posicion === 3) this._estadisticas[3]++;
    else this._estadisticas.otros++;
  }

  verEstadisticas() {
    return this._estadisticas;
  }
}

let participantes = [];

export function getParticipantes() {
  return participantes;
}

export function setParticipantes(nuevosParticipantes) {
  participantes = nuevosParticipantes;
}
