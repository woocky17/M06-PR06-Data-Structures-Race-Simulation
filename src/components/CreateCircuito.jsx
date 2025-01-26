import { useState } from "react";
import Circuito, { circuitos } from "../modules/Circuito";
import { participantes } from "../modules/Participante";

const CreateCircuito = () => {
  const [nombre, setNombre] = useState("");
  const [longitud, setLongitud] = useState("");
  const [participantesSeleccionados, setParticipantesSeleccionados] =
    useState("");

  const [circuitoSeleccionado, setCircuitoSeleccionado] = useState(null);

  const [mensaje, setMensaje] = useState("");

  const crearCircuito = () => {
    if (nombre.trim() === "" || longitud.trim() === "") {
      setMensaje("El nombre y la longitud son obligatorios.");
      return;
    }

    const nuevoCircuito = new Circuito(nombre, parseFloat(longitud));

    circuitos.push(nuevoCircuito);

    setMensaje(`Circuito ${nombre} creado con éxito.`);
  };

  const agregarParticipante = () => {
    if (!participantesSeleccionados) {
      setMensaje("Debe seleccionar un participante.");
      return;
    }

    if (!circuitoSeleccionado || !circuitoSeleccionado.nombre) {
      setMensaje("Debe seleccionar un circuito.");
      return;
    }

    const participante = participantes.find(
      (p) => p.nombre === participantesSeleccionados
    );

    if (!participante) {
      setMensaje("El participante seleccionado no es válido.");
      return;
    }

    circuitoSeleccionado.participantes.push(participante);
    setMensaje(
      `Participante ${participante.nombre} agregado al circuito ${circuitoSeleccionado.nombre}.`
    );

    console.log(circuitoSeleccionado);
  };

  return (
    <div>
      <h2>Crear Circuito</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre del circuito"
      />
      <input
        type="number"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
        placeholder="Longitud del circuito"
      />
      <button onClick={crearCircuito}>Crear Circuito</button>
      <h3>Agregar Participantes</h3>
      <select
        value={circuitoSeleccionado?.nombre || ""}
        onChange={(e) => {
          const circuito = circuitos.find((c) => c.nombre === e.target.value);
          setCircuitoSeleccionado(circuito || null);
        }}
      >
        <option value="">Seleccionar Circuito</option>
        {circuitos.map((c) => (
          <option key={c.nombre} value={c.nombre}>
            {c.nombre}
          </option>
        ))}
      </select>

      <select
        value={participantesSeleccionados}
        onChange={(e) => setParticipantesSeleccionados(e.target.value)}
      >
        <option value="">Seleccionar participante</option>
        {participantes.map((p) => (
          <option key={p.nombre} value={p.nombre}>
            {p.nombre}
          </option>
        ))}
      </select>

      <button onClick={agregarParticipante}>Agregar Participante</button>
      {mensaje && <p>{mensaje}</p>}
      <h4>Participantes añadidos:</h4>
      <ul>
        {circuitos.map((circuito, index) => (
          <li key={index}>
            {`${circuito.nombre}: `}
            {circuito.participantes && circuito.participantes.length > 0
              ? circuito.participantes.map((p) => p.nombre).join(", ")
              : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateCircuito;
