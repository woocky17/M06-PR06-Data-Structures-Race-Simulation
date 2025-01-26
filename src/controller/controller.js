import { circuitos } from "../modules/Circuito";

export const iniciarCarrera = (circuito, onUpdate, onFinish) => {
  if (typeof onUpdate !== "function" || typeof onFinish !== "function") {
    throw new TypeError("onUpdate y onFinish deben ser funciones válidas");
  }

  const circuitoSeleccionado = circuitos.find((c) => c.nombre === circuito);

  if (
    !circuitoSeleccionado ||
    !Array.isArray(circuitoSeleccionado.participantes) ||
    circuitoSeleccionado.participantes.length === 0
  ) {
    console.error(circuitoSeleccionado);
    throw new Error(
      "El circuito debe tener participantes para iniciar la carrera."
    );
  }

  const estadoParticipantes = circuitoSeleccionado.participantes.map(
    (participante) => ({
      nombre: participante.nombre,
      vehiculo: participante.vehiculo.modelo,
      distanciaRecorrida: 0,
      vueltas: 0,
      terminado: false,
    })
  );

  const intervalo = setInterval(() => {
    estadoParticipantes.forEach((estado) => {
      if (!estado.terminado) {
        const vehiculo = circuitoSeleccionado.participantes.find(
          (p) => p.nombre === estado.nombre
        ).vehiculo;

        const avance = vehiculo.movimiento(circuitoSeleccionado.tiempo);
        estado.distanciaRecorrida += avance > 0 ? avance : 0;

        if (estado.distanciaRecorrida >= circuitoSeleccionado.longitud) {
          estado.distanciaRecorrida = circuitoSeleccionado.longitud;
          estado.terminado = true;
        }

        estado.vueltas++;
      }
    });

    onUpdate([...estadoParticipantes]);

    if (estadoParticipantes.every((estado) => estado.terminado)) {
      clearInterval(intervalo);

      const resultadosFinales = estadoParticipantes
        .sort((a, b) => a.vueltas - b.vueltas)
        .map((estado, index) => ({
          puesto: index + 1,
          ...estado,
        }));

      resultadosFinales.forEach((resultado, index) => {
        const participante = circuitoSeleccionado.participantes.find(
          (p) => p.nombre === resultado.nombre
        );

        if (index === 0) participante.actualizarEstadisticas(1);
        else if (index === 1) participante.actualizarEstadisticas(2);
        else if (index === 2) participante.actualizarEstadisticas(3);
        else participante.actualizarEstadisticas("otros");
      });

      onFinish(resultadosFinales);
    }
  }, 500);
};
