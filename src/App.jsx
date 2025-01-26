import "./App.css";
import "./index.css";
import { useState } from "react";

import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import CreateCircuito from "./components/CreateCircuito";
import CreateParticipantes from "./components/CreateParticipantes";
import CreateVehiculos from "./components/CreateVehiculos";
import { circuitos } from "./modules/Circuito";
import { iniciarCarrera } from "./controller/controller";

function App() {
  const [circuitoSeleccionado, setCircuitoSeleccionado] = useState("");
  const [estadoCarrera, setEstadoCarrera] = useState([]);
  const [resultados, setResultados] = useState([]);

  function handleIniciarCarrera() {
    if (!circuitoSeleccionado) {
      console.error(
        "Por favor selecciona un circuito antes de iniciar la carrera."
      );
      return;
    }

    const circuito = circuitos.find((c) => c.nombre === circuitoSeleccionado);
    if (!circuito) {
      console.error("Circuito no encontrado.");
      return;
    }

    try {
      iniciarCarrera(
        circuitoSeleccionado,
        (estadoActualizado) => {
          // Actualizar estado en tiempo real
          setEstadoCarrera(estadoActualizado);
        },
        (resultadosFinales) => {
          // Mostrar resultados finales
          setResultados(resultadosFinales);
        }
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <NavBar />
      <div
        style={{
          marginTop: 50,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="circuito-select">
                    Selecciona un circuito:
                  </label>
                  <select
                    id="circuito-select"
                    value={circuitoSeleccionado}
                    onChange={(e) => setCircuitoSeleccionado(e.target.value)}
                    style={{ marginLeft: "10px" }}
                  >
                    <option value=""> Selecciona un circuito </option>
                    {circuitos.map((circuito, index) => (
                      <option key={index} value={circuito.nombre}>
                        {circuito.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <button onClick={handleIniciarCarrera}>Iniciar Carrera</button>
                <div>
                  <h3>Estado de la carrera:</h3>
                  <pre>{JSON.stringify(estadoCarrera, null, 2)}</pre>
                </div>
                <div>
                  <h3>Resultados finales:</h3>
                  <pre>{JSON.stringify(resultados, null, 2)}</pre>
                </div>
              </>
            }
          />

          <Route path="/Crear-Circuito" element={<CreateCircuito />} />
          <Route
            path="/Crear-Participantes"
            element={<CreateParticipantes />}
          />
          <Route path="/Crear-Vehiculos" element={<CreateVehiculos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
