
import React from 'react';
import { Formulario } from './components/Formulario';

function App() {
  const keyAPi = "19452370-7628239cd005c462aaec7e6a5";
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscar de Imagines</p>
        <Formulario />
      </div>
    </div>
  );
}

export default App;
