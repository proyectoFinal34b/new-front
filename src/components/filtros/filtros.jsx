import React, { useState } from "react";

const Gatos = [
  { id: 1, nombre: "Luna", raza: "Persa", sexo: "Hembra", edad: 2 },
  { id: 2, nombre: "Milo", raza: "Siames", sexo: "Macho", edad: 3 },
  { id: 3, nombre: "Simba", raza: "Bengala", sexo: "Macho", edad: 1 },
  { id: 4, nombre: "Grisito", raza: "Mestizo", sexo: "Macho", edad: 5 },
  { id: 5, nombre: "Nina", raza: "Persa", sexo: "Hembra", edad: 2 },
];

export default function GatosFiltrados() {
  const [gatos, setGatos] = useState(Gatos);
  const [filtroRaza, setFiltroRaza] = useState("");
  const [filtroSexo, setFiltroSexo] = useState("");
  const [filtroEdad, setFiltroEdad] = useState("");

  function filtrarGatos() {
    let tempGatos = Gatos;
  
    if (filtroRaza) {
      tempGatos = tempGatos.filter((gato) => gato.raza === filtroRaza);
    }
    if (filtroSexo) {
      tempGatos = tempGatos.filter((gato) => gato.sexo === filtroSexo);
    }
    if (filtroEdad) {
      tempGatos = tempGatos.filter((gato) => gato.edad === parseInt(filtroEdad));
    }
    setGatos(tempGatos);
  }

  return (
    <div>
      <h2>Gatos en adopción</h2>
      <div>
        <label htmlFor="raza">Raza:</label>
        <select
          id="raza"
          onChange={(e) => setFiltroRaza(e.target.value)}
          value={filtroRaza}
        >
          <option value="">Cualquier raza</option>
          <option value="Persa">Persa</option>
          <option value="Siames">Siames</option>
          <option value="Bengala">Bengala</option>
          <option value="Mestizo">Mestizo</option>
        </select>
      </div>
      <div>
        <label htmlFor="sexo">Sexo:</label>
        <select
          id="sexo"
          onChange={(e) => setFiltroSexo(e.target.value)}
          value={filtroSexo}
        >
          <option value="">Cualquier sexo</option>
          <option value="Hembra">Hembra</option>
          <option value="Macho">Macho</option>
        </select>
      </div>
      <div>
        <label htmlFor="edad">Edad:</label>
        <select
          id="edad"
          onChange={(e) => setFiltroEdad(e.target.value)}
          value={filtroEdad}
        >
          <option value="">Cualquier edad</option>
          <option value="1">1 año</option>
          <option value="2">2 años</option>
          <option value="3">3 años</option>
          <option value="4">4 años</option>
          <option value="5">5 años o más</option>
        </select> 

</div>
      <button onClick={filtrarGatos}>Filtrar</button>
      <ul>
        {gatos.map((gato) => (
          <li key={gato.id}>
            <p>Nombre: {gato.nombre}</p>
            <p>Raza: {gato.raza}</p>
            <p>Sexo: {gato.sexo}</p>
            <p>Edad: {gato.edad} años</p>
          </li>
        ))}
      </ul>
    </div>
  );
}