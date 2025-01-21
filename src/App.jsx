import "./App.css";
import { getCircuitos } from "./modulos/Circuito";
import NavBar from "./componentes/NavBar";
import { Routes, Route } from "react-router-dom";
import CreateCircuito from "./components/CreateCircuito";
import CreateParticipantes from "./components/CreateParticipantes";
import CreateVehiculos from "./components/CreateVehiculos";
import "./index.css";

function App() {
  const iniciarCarrera = () => {
    const circuitos = getCircuitos();
    if (circuitos.length > 0) {
      const circuito = circuitos[0];
      if (typeof circuito.simularCarrera === "function") {
        circuito.simularCarrera();
      } else {
        console.error(
          "El método simularCarrera no está definido en el circuito."
        );
      }
    } else {
      console.error("No hay circuitos disponibles.");
    }
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<button onClick={iniciarCarrera}>Iniciar Carrera</button>}
        />
        <Route path="/Crear-Circuito" element={<CreateCircuito />} />
        <Route path="/Crear-Participantes" element={<CreateParticipantes />} />
        <Route path="/Crear-Vehiculos" element={<CreateVehiculos />} />
      </Routes>
    </>
  );
}

export default App;
