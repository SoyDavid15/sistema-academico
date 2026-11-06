import { useState } from 'react';

function Boton({ children, alHacerClic }) {
  return <button onClick={alHacerClic}>{children}</button>;
}

// Recibe un estudiante y devuelve una fila con nombre, nota y estado.
function FilaEstudiante({ estudiante }) {
  const aprobado = estaAprobado(estudiante.nota);
  return (
    <tr>
      <td>{estudiante.nombre}</td>
      <td>{estudiante.nota}</td>
      <td>{aprobado ? 'Aprobado' : 'Reprobado'}</td>
    </tr>
  );
}

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Ana', nota: 4.5 }
  ]);

  function agregar() {
    const nuevo = { id: Date.now(), nombre: 'Nuevo', nota: 3.2 };
    setEstudiantes([...estudiantes, nuevo]);      // uno NUEVO, no push
  }

  return (
    <>
      <h1>Notas</h1>
      <ul>
        {estudiantes.map(e => <li key={e.id}>{e.nombre} - {e.nota}</li>)}
      </ul>
      <Boton alHacerClic={agregar}>Agregar estudiante</Boton>
    </>
  );
}

export default App;