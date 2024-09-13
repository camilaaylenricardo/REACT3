import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ListaTareas from './components/ListaTareas';
import DetalleTarea from './components/DetalleTarea';
import CrearTarea from './components/CrearTarea';
import tareasData from './data/tareas';
import './App.css';

function App() {
  // Estado inicial de las tareas
  const [tareas, setTareas] = useState(tareasData);

  // Función para eliminar una tarea por su ID
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  // Función para cambiar el estado de completada/incompleta de una tarea
  const cambiarEstado = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id
        ? { ...tarea, completada: !tarea.completada } // Cambia el estado de la tarea
        : tarea
    ));
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">Inicio</Link> | <Link to="/crear">Crear Tarea</Link>
        </nav>
        <Routes>
          {/* Ruta para la página principal con la lista de tareas */}
          <Route path="/" element={<ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} cambiarEstado={cambiarEstado} />} />
          {/* Ruta para la página de detalle de una tarea */}
          <Route path="/tarea/:id" element={<DetalleTarea tareas={tareas} eliminarTarea={eliminarTarea} cambiarEstado={cambiarEstado} />} />
          {/* Ruta para la página de creación de nuevas tareas */}
          <Route path="/crear" element={<CrearTarea setTareas={setTareas} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;