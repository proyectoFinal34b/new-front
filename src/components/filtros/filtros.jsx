import React, { useState, useEffect } from "react";

const Gatos = [
  { id: 1, nombre: 'Mittens', status: 'Adoptado', edad: 2, sexo: 'Hembra' },
  { id: 2, nombre: 'Toby', status: 'En albergue', edad: 4, sexo: 'Macho' },
  { id: 3, nombre: 'Socks', status: 'Apadrinado', edad: 3, sexo: 'Hembra' },
  { id: 4, nombre: 'Oliver', status: 'Adoptado', edad: 1, sexo: 'Macho' },
  { id: 5, nombre: 'Luna', status: 'Apadrinado', edad: 5, sexo: 'Hembra' },
  { id: 6, nombre: 'Simba', status: 'En albergue', edad: 2, sexo: 'Macho' },
  { id: 7, nombre: 'Ginger', status: 'En albergue', edad: 4, sexo: 'Hembra' },
  { id: 8, nombre: 'Whiskers', status: 'Adoptado', edad: 3, sexo: 'Macho' },
  { id: 9, nombre: 'Milo', status: 'En albergue', edad: 2, sexo: 'Macho' },
  { id: 10, nombre: 'Misty', status: 'Apadrinado', edad: 1, sexo: 'Hembra' },
];

export default function GatosFiltrados() {
  const [gatos, setGatos] = useState(Gatos);
  const [filtroStatus, setFiltroStatus] = useState("");
  const [filtroSexo, setFiltroSexo] = useState("");
  const [filtroEdad, setFiltroEdad] = useState("");

  function aplicarFiltros(status, sexo, edad)  {
    let tempGatos = Gatos;
  
    if (status) {
      tempGatos = tempGatos.filter((gato) => gato.status === filtroStatus);
    }
    if (sexo) {
      tempGatos = tempGatos.filter((gato) => gato.sexo === filtroSexo);
    }
    if (edad) {
      tempGatos = tempGatos.filter((gato) => gato.edad === parseInt(filtroEdad));
    }
    setGatos(tempGatos);
  }

  useEffect(() => {
    aplicarFiltros(filtroStatus, filtroSexo, filtroEdad);
  }, [filtroStatus, filtroSexo, filtroEdad]);

  return (
    <div>
      <h2>Gatos en adopción</h2>
      <div>
        <label htmlFor="status">Estado:</label>
        <select
          id="status"
          onChange={(e) => setFiltroStatus(e.target.value)}
          value={filtroStatus}
        >
          <option value="">Todos los gatos</option>
          <option value="En albergue">En Albergue</option>
          <option value="Adoptado">Adoptado</option>
          <option value="Apadrinado">Apadrinado</option>
        </select>
      </div>
      <div>
        <label htmlFor="sexo">Sexo:</label>
        <select
          id="sexo"
          onChange={(e) => setFiltroSexo(e.target.value)}
          value={filtroSexo}
        >
          <option value="">Cualquier Sexo</option>
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
          <option value="5">5 años</option>
        </select> 
      </div>
      <ul>
        {gatos.map((gato) => (
          <li key={gato.id}>
            <p>Nombre: {gato.nombre}</p>
            <p>Raza: {gato.status}</p>
            <p>Sexo: {gato.sexo}</p>
            <p>Edad: {gato.edad} años</p>
          </li>
        ))}
      </ul>
    </div>
  );
}