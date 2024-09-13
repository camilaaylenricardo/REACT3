import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetalleTarea({ tareas, eliminarTarea, cambiarEstado }) {
  const { id } = useParams(); // Obtiene el ID de la tarea desde la URL
  const navigate = useNavigate(); // Permite navegar programáticamente
  const tarea = tareas.find(t => t.id === parseInt(id)); // Busca la tarea por su ID

  if (!tarea) {
    return <p>Tarea no encontrada</p>; // Muestra un mensaje si la tarea no se encuentra
  }

  const manejarEliminar = () => {
    eliminarTarea(tarea.id); // Elimina la tarea
    navigate('/'); // Navega a la página principal después de eliminar
  };

  return (
    <div>
      <h1>{tarea.titulo}</h1>
      <p>{tarea.descripcion}</p>
      <p>Fecha de Creación: {tarea.fecha}</p>
      <p>Estado: {tarea.completada ? 'Completada' : 'Incompleta'}</p>
      {/* Botón para cambiar el estado de la tarea */}
      <button onClick={() => cambiarEstado(tarea.id)}>
        {tarea.completada ? 'Marcar Incompleta' : 'Marcar Completa'}
      </button>
      {/* Botón para eliminar la tarea */}
      <button className="delete" onClick={manejarEliminar}>Eliminar</button>
    </div>
  );
}

export default DetalleTarea;