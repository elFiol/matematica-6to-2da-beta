import { useState } from 'react'
import './App.css'

function App() {
  const respuestaCorrecta = 4;

  const [respuesta, setRespuesta] = useState("");
  const [resultado, setResultado] = useState(null);

  function comprobarRespuesta(event) {
    event.preventDefault();

    const respuestaUsuario = Number(respuesta);

    const respuestaObjeto = {
      respuesta: respuestaUsuario,
      correcta: respuestaUsuario === respuestaCorrecta,
    };

    setResultado(respuestaObjeto);

    console.log(respuestaObjeto);
  }

  return (
    <div>
      <h1>Lección de ecuaciones</h1>

      <p>Resuelve la siguiente ecuación:</p>

      <h2>x + 3 = 7</h2>

      <form onSubmit={comprobarRespuesta}>
        <input
          type="number"
          value={respuesta}
          onChange={(event) => setRespuesta(event.target.value)}
          placeholder="Escribe tu respuesta"
          required
        />

        <button type="submit">Comprobar</button>
      </form>

      {resultado !== null && (
        <div>
          <h3>
            {resultado.correcta
              ? "¡Correcto! 🎉"
              : "Respuesta incorrecta ❌"}
          </h3>
        </div>
      )}
    </div>
  );
}


export default App
