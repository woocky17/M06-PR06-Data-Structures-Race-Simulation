import { useState } from "react";
import { Moto, Coche, vehiculos } from "../modules/Vehiculo";

const CreateVehiculos = () => {
  const [modelo, setModelo] = useState("");
  const [traccion, setTraccion] = useState("dura");
  const [avanceMax, setAvanceMax] = useState(10);
  const [avanceMin, setAvanceMin] = useState(5);
  const [tipoVehiculo, setTipoVehiculo] = useState("Moto");

  const crearVehiculo = () => {
    let nuevoVehiculo;
    if (tipoVehiculo === "Moto") {
      nuevoVehiculo = new Moto(modelo, traccion, avanceMax, avanceMin);
    } else if (tipoVehiculo === "Coche") {
      nuevoVehiculo = new Coche(modelo, traccion, avanceMax, avanceMin);
    }
    try {
      vehiculos.push(nuevoVehiculo);
      console.log(`Vehículo ${modelo} creado con éxito.`);
    } catch (error) {
      console.error("Error al crear el vehículo:", error.message);
    }
  };
  return (
    <div>
      <h2>Crear Vehículo</h2>
      <input
        type="text"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        placeholder="Modelo del vehículo"
      />
      <input
        type="number"
        value={avanceMax}
        onChange={(e) => setAvanceMax(Number(e.target.value))}
        placeholder="Avance máximo"
      />
      <input
        type="number"
        value={avanceMin}
        onChange={(e) => setAvanceMin(Number(e.target.value))}
        placeholder="Avance mínimo"
      />
      <select value={traccion} onChange={(e) => setTraccion(e.target.value)}>
        <option value="dura">Dura</option>
        <option value="mediana">Mediana</option>
        <option value="blanda">Blanda</option>
      </select>
      <select
        value={tipoVehiculo}
        onChange={(e) => setTipoVehiculo(e.target.value)}
      >
        <option value="Moto">Moto</option>
        <option value="Coche">Coche</option>
      </select>
      <button onClick={crearVehiculo}>Crear Vehículo</button>
    </div>
  );
};

export default CreateVehiculos;
