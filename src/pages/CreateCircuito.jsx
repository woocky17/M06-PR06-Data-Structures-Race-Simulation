import * as Select from "@radix-ui/react-select";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import Circuito from "../modulos/Circuito";

const circuitos = [
  { name: "Circuito de Mónaco", longitud: "3.34" },
  { name: "Autódromo de Silverstone", longitud: "5.89" },
  { name: "Circuito de Spa-Francorchamps", longitud: "7.004" },
  { name: "Circuito de Suzuka", longitud: "5.807" },
  { name: "Autódromo de Interlagos", longitud: "4.309" },
];

const CreateCircuito = () => {
  const onClick = () => {
    const circuitoSeleccionado = circuitos.find(
      (circuito) => circuito.name === selectValue
    );
    if (circuitoSeleccionado) {
      const { name, longitud } = circuitoSeleccionado;

      const circuito = new Circuito(name, longitud);
      console.log(circuito);
    } else {
      console.error("No se seleccionó un circuito válido.");
    }
  };

  const [selectValue, setSelectValue] = useState("");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <label
        htmlFor="circuito"
        style={{ display: "block", marginBottom: "8px" }}
      >
        <strong>Selecciona la pista donde quieres correr</strong>
      </label>

      <p>Has seleccionado: {selectValue || "Ninguno"}</p>
      <Select.Root value={selectValue} onValueChange={setSelectValue}>
        <Select.Trigger
          id="circuito"
          aria-label="Selecciona un circuito"
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          {circuitos.map((circuito) => (
            <Select.Item
              key={circuito.name}
              value={circuito.name}
              style={{ padding: "8px", cursor: "pointer" }}
            >
              {circuito.name}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Button onClick={onClick}>Crear</Button>
    </div>
  );
};

export default CreateCircuito;
