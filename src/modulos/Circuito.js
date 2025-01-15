const tiempo = [{ clima: "seco" }, { clima: "húmedo" }, { clima: "lluvioso" }];
export default class Circuito {
  constructor(nombre, longitud) {
    const tiempoAleatorio =
      tiempo[Math.floor(Math.random() * tiempo.length)].clima;

    this.tiempo = tiempoAleatorio;
    this.nombre = nombre;
    this.longitud = longitud;
  }
}
