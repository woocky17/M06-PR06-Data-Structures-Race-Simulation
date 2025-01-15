import "./App.css";
import { Moto, Coche } from "./modulos/Vehiculo";
import Circuito from "./modulos/Circuito";
import NavBar from "./componentes/NavBar";
import { Routes, Route } from "react-router-dom";
import CreateCircuito from "./pages/CreateCircuito";

function App() {
  const circuito = new Circuito("Circuito de Mónaco", 3.34);
  const moto1 = new Moto("Yamaha", "mediana", 200, 50);
  const coche1 = new Coche("Lamborgini", "dura", 250, 40);

  console.log(moto1);
  console.log(coche1);

  console.log(`Moviendo moto: ${moto1.movimiento()}`);
  console.log(`Moviendo coche: ${coche1.movimiento(circuito.tiempo)}`);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the homepage!</h1>} />
        <Route path="/Crear-Circuito" element={<CreateCircuito />} />
      </Routes>
    </>
  );
}

export default App;
