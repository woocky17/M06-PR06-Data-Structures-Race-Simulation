// CreateParticipante.jsx
import { useState } from "react";
import Participante, {
  getParticipantes,
  setParticipantes,
} from "../modulos/Participante";
import { getVehiculos } from "../modulos/Vehiculo";

const CreateParticipante = () => {
  const [nombre, setNombre] = useState("");
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estadisticas, setEstadisticas] = useState(null);

  const crearParticipante = () => {
    if (nombre.trim() === "") {
      setMensaje("El nombre es obligatorio.");
      return;
    }

    const participantes = getParticipantes();
    const participanteExistente = participantes.find(
      (p) => p.nombre === nombre
    );
    if (participanteExistente) {
      setMensaje("El participante ya existe.");
      return;
    }

    const vehiculos = getVehiculos();
    const vehiculo = vehiculos.find((v) => v.modelo === vehiculoSeleccionado);
    if (!vehiculo) {
      setMensaje("Vehículo no encontrado.");
      return;
    }

    const nuevoParticipante = new Participante(nombre, vehiculo);
    participantes.push(nuevoParticipante);
    setParticipantes(participantes);

    setMensaje(`Participante ${nombre} creado con éxito.`);
  };

  const verEstadisticas = () => {
    const participantes = getParticipantes();
    const participante = participantes.find((p) => p.nombre === nombre);
    if (participante) {
      setEstadisticas(participante.verEstadisticas());
    } else {
      setMensaje("Participante no encontrado.");
    }
  };

  return (
    <div>
      <h2>Crear Participante</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre del participante"
      />
      <select
        value={vehiculoSeleccionado}
        onChange={(e) => setVehiculoSeleccionado(e.target.value)}
      >
        <option value="">Seleccionar Vehículo</option>
        {getVehiculos().map((v) => (
          <option key={v.modelo} value={v.modelo}>
            {v.modelo}
          </option>
        ))}
      </select>

      <button onClick={crearParticipante}>Crear Participante</button>
      <button onClick={verEstadisticas}>Ver Estadísticas</button>

      {mensaje && <p>{mensaje}</p>}

      {estadisticas && (
        <div>
          <p>1º: {estadisticas[1]}</p>
          <p>2º: {estadisticas[2]}</p>
          <p>3º: {estadisticas[3]}</p>
          <p>Otros: {estadisticas.otros}</p>
        </div>
      )}
    </div>
  );
};

export default CreateParticipante;
