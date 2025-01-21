import * as Select from "@radix-ui/react-select";
import { Button, Flex } from "@radix-ui/themes";
import { useState } from "react";
import Circuito, { addCircuito } from "../modulos/Circuito";
import { vehiculos } from "../modulos/Vehiculo";
import Participante from "../modulos/Participante";

const CreateCircuito = () => {
  const [nombre, setNombre] = useState("");
  const [longitud, setLongitud] = useState("");
  const [participantes, setParticipantes] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const crearCircuito = () => {
    if (nombre.trim() === "" || longitud.trim() === "") {
      setMensaje("El nombre y la longitud son obligatorios.");
      return;
    }

    const nuevoCircuito = new Circuito(nombre, parseFloat(longitud));
    participantes.forEach((participante) => {
      nuevoCircuito.agregarParticipante(participante);
    });
    addCircuito(nuevoCircuito);
    setMensaje(`Circuito ${nombre} creado con éxito.`);
  };

  const agregarParticipante = (nombreParticipante, modeloVehiculo) => {
    const vehiculo = vehiculos.find((v) => v.modelo === modeloVehiculo);
    if (vehiculo) {
      const nuevoParticipante = new Participante(nombreParticipante, vehiculo);
      setParticipantes([...participantes, nuevoParticipante]);
    } else {
      setMensaje("Vehículo no encontrado.");
    }
  };

  return (
    <Flex>
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
        <h3>Agregar Participantes</h3>
        <Select.Root
          onValueChange={(value) =>
            agregarParticipante(value.nombre, value.modelo)
          }
        >
          <Select.Trigger>
            <Select.Value placeholder="Seleccionar Participante" />
          </Select.Trigger>
          <Select.Content>
            {vehiculos.map((v) => (
              <Select.Item
                key={v.modelo}
                value={{ nombre: v.modelo, modelo: v.modelo }}
              >
                {v.modelo}
              </Select.Item>
            ))}
            <Select.Item value={{ nombre: "Nuevo", modelo: "" }}>
              <input
                type="text"
                placeholder="Nombre del participante"
                onBlur={(e) => agregarParticipante(e.target.value, "")}
              />
            </Select.Item>
          </Select.Content>
        </Select.Root>
        <Button onClick={crearCircuito}>Crear Circuito</Button>
        {mensaje && <p>{mensaje}</p>}
      </div>
    </Flex>
  );
};

export default CreateCircuito;
