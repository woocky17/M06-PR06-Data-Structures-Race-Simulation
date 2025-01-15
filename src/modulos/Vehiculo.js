export class Vehiculo {
  constructor(modelo, traccion, avanceMax, avanceMin) {
    this.modelo = modelo;
    this.avanceMax = avanceMax;
    this.avanceMin = avanceMin;
    this.traccion = traccion;
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
  }
  movimiento() {
    let movimiento = super.movimiento();
    console.log(movimiento + ": velocidad base");

    switch (this.traccion) {
      case "dura":
        return movimiento + 5;
      case "mediana":
        return movimiento + 2;

      default:
        return movimiento;
    }
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
