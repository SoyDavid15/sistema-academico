import { useState } from 'react'

function estaAprobado(nota) {
  return nota >= 3.0
}

function Boton({ children, alHacerClic, variante = 'primario', cargando = false }) {
  return (
    <button 
      className={`boton boton--${variante}`} 
      onClick={alHacerClic} 
      disabled={cargando}
    >
      {cargando ? 'Procesando...' : children}
    </button>
  )
}

function FilaEstudiante({ estudiante }) {
  const aprobado = estaAprobado(estudiante.nota)
  return (
    <tr>
      <td>{estudiante.nombre}</td>
      <td>{estudiante.nota}</td>
      <td>{aprobado ? 'Aprobado' : 'Reprobado'}</td>
    </tr>
  )
}

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Ana', nota: 4.5 },
    { id: 2, nombre: 'Luis', nota: 2.8 }
  ])
  const [nombre, setNombre] = useState('')

  function agregarEstudiante() {
    if (nombre.trim() === '') return
    const nuevo = {
      id: Date.now(),
      nombre: nombre,
      nota: 3.5
    }
    setEstudiantes([...estudiantes, nuevo])
    setNombre('')
  }

  return (
    <div>
      <h1>Notas</h1>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nota</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map(e => (
            <FilaEstudiante key={e.id} estudiante={e} />
          ))}
        </tbody>
      </table>

      <div>
        <input 
          type="text"
          placeholder="Nombre del estudiante"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <Boton alHacerClic={agregarEstudiante}>Agregar estudiante</Boton>
      </div>
    </div>
  )
}

export default App
