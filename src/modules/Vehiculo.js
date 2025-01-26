class Vehiculo {
  constructor(modelo, traccion, avanceMax, avanceMin) {
    this.modelo = modelo;
    this.traccion = traccion;
    this.avanceMax = avanceMax;
    this.avanceMin = avanceMin;
  }

  movimiento() {
    return (
      Math.floor(Math.random() * (this.avanceMax - this.avanceMin + 1)) +
      this.avanceMin
    );
  }
}

export class Moto extends Vehiculo {
  constructor(modelo, traccion, avanceMax, avanceMin) {
    super(modelo, traccion, avanceMax, avanceMin);
    this.caida = 0;
  }

  movimiento(clima) {
    if (this.caida > 0) {
      this.caida--;
      return 0;
    }

    let movimiento = super.movimiento();

    switch (this.traccion) {
      case "dura":
        movimiento += 5;
        break;
      case "mediana":
        movimiento += 2;
        break;
    }

    if (this.verificarCaida(clima)) {
      this.caida = 5;
      return 0;
    }

    return movimiento;
  }

  verificarCaida(clima) {
    let probabilidad = 0;
    if (clima === "lluvioso" && this.traccion === "dura") {
      probabilidad = 30;
    } else if (
      (clima === "húmedo" && this.traccion === "dura") ||
      (clima === "lluvioso" && this.traccion === "mediana")
    ) {
      probabilidad = 20;
    } else if (clima === "húmedo" && this.traccion === "mediana") {
      probabilidad = 10;
    } else {
      probabilidad = 5;
    }

    return Math.random() * 100 < probabilidad;
  }
}

export class Coche extends Vehiculo {
  constructor(modelo, traccion, avanceMax, avanceMin) {
    super(modelo, traccion, avanceMax, avanceMin);
  }

  movimiento(clima) {
    let movimiento = super.movimiento();
    const modificadores = [
      { label: "seco", blanda: 0, media: +2, dura: +4 },
      { label: "húmedo", blanda: +2, media: +2, dura: +2 },
      { label: "lluvioso", blanda: +4, media: +2, dura: 0 },
    ];

    const climaValido = modificadores.some((m) => m.label === clima);
    if (!climaValido) {
      throw new Error("Clima no válido");
    }

    const modificador = modificadores.find((m) => m.label === clima);

    switch (this.traccion) {
      case "blanda":
        return movimiento + modificador.blanda;
      case "media":
        return movimiento + modificador.media;
      case "dura":
        return movimiento + modificador.dura;
      default:
        throw new Error("Tracción no válida");
    }
  }
}

export let vehiculos = [];
