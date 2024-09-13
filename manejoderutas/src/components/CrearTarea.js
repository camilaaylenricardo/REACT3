import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CrearTarea({ setTareas }) {
  const [titulo, setTitulo] = useState(''); // Estado para el título de la tarea
  const [descripcion, setDescripcion] = useState(''); // Estado para la descripción de la tarea
  const [completada, setCompletada] = useState(false); // Estado para marcar la tarea como completada o incompleta
  const navigate = useNavigate(); // Permite navegar programáticamente

  const manejarEnvio = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    const nuevaTarea = {
      id: Date.now(), // Genera un ID único basado en el timestamp
      titulo,
      descripcion,
      completada,
      fecha: new Date().toISOString().split('T')[0], // Fecha actual en formato YYYY-MM-DD
    };
    setTareas(prevTareas => [...prevTareas, nuevaTarea]); // Añade la nueva tarea a la lista
    navigate('/'); // Navega a la página principal después de crear la tarea
  };

  return (
    <div>
      <h1>Crear Nueva Tarea</h1>
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        </div>
        <div>
          <label>
            <input type="checkbox" checked={completada} onChange={() => setCompletada(!completada)} />
            Completada
          </label>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default CrearTarea;