import React from 'react';
import { Link } from 'react-router-dom';

function ListaTareas({ tareas, eliminarTarea, cambiarEstado }) {
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {/* Mapea y muestra cada tarea en la lista */}
        {tareas.map(tarea => (
          <li key={tarea.id}>
            <div>
              <Link to={`/tarea/${tarea.id}`}>{tarea.titulo}</Link> - {tarea.descripcion}
            </div>
            <div>
              {/* Botón para cambiar el estado de la tarea */}
              <button onClick={() => cambiarEstado(tarea.id)}>
                {tarea.completada ? 'Marcar Incompleta' : 'Marcar Completa'}
              </button>
              {/* Botón para eliminar la tarea */}
              <button className="delete" onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Enlace para crear una nueva tarea */}
      <Link to="/crear">
        <button>Crear Nueva Tarea</button>
      </Link>
    </div>
  );
}

export default ListaTareas;