const tiempo = [{ clima: "seco" }, { clima: "húmedo" }, { clima: "lluvioso" }];

export default class Circuito {
  constructor(nombre, longitud) {
    const tiempoAleatorio =
      tiempo[Math.floor(Math.random() * tiempo.length)].clima;

    this._tiempo = tiempoAleatorio;
    this._nombre = nombre;
    this._longitud = longitud;
    this._participantes = [];
  }

  get tiempo() {
    return this._tiempo;
  }

  set tiempo(value) {
    this._tiempo = value;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get longitud() {
    return this._longitud;
  }

  set longitud(value) {
    this._longitud = value;
  }

  get participantes() {
    return this._participantes;
  }

  agregarParticipante(participante) {
    if (!this._participantes.includes(participante)) {
      this._participantes.push(participante);
    }
  }

  eliminarParticipante(participante) {
    this._participantes = this._participantes.filter((p) => p !== participante);
  }

  verParticipantes() {
    return this._participantes;
  }

  simularCarrera() {
    const interval = setInterval(() => {
      this._participantes.forEach((participante) => {
        const avance = participante.vehiculo.movimiento(this._tiempo);
        participante.posicion += avance;
      });
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      this._participantes.sort((a, b) => b.posicion - a.posicion);
      this._participantes.forEach((participante, index) => {
        participante.actualizarEstadisticas(index + 1);
      });
      console.log(
        "Carrera finalizada. Podio:",
        this._participantes.slice(0, 3)
      );
    }, this._longitud * 1000);
  }
}

let circuitos = [];

export const getCircuitos = () => circuitos;

export const addCircuito = (nuevoCircuito) => {
  circuitos.push(nuevoCircuito);
};

export const setCircuitos = (nuevosCircuitos) => {
  circuitos = nuevosCircuitos;
};
