const tiempo = [{ clima: "seco" }, { clima: "húmedo" }, { clima: "lluvioso" }];

export default class Circuito {
  constructor(nombre, longitud) {
    const tiempoAleatorio =
      tiempo[Math.floor(Math.random() * tiempo.length)].clima;

    this.tiempo = tiempoAleatorio;
    this.nombre = nombre;
    this.longitud = longitud;
    this.participantes = [];
  }
}

export let circuitos = [
  new Circuito("Circuito de Montaña", 12.5),
  new Circuito("Pista de Velocidad", 5.3),
  new Circuito("Ruta Costera", 20.1),
];
