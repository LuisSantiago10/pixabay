import React, { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { ListadoImagenes } from './components/ListadoImagenes';

function App() {
  const [buscar, setBuscar] = useState('');
  const [imagenest, setImagenest] = useState([]);

  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    if (setBuscar === '') return
    const consultarApi = async () =>{
      const imagenesPorPagina = 30;
      const key = "19452370-7628239cd005c462aaec7e6a5";
      const url = `https://pixabay.com/api/?key=${ key }&q=${ buscar }&per_page=${ imagenesPorPagina }&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setImagenest(resultado.hits); 

      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      setTotalPaginas(calcularTotalPaginas);

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior : 'smooth'});
    }
    consultarApi();
  }, [buscar,paginaActual])

  const paginaAnterior = () =>{
    const nuevaPaginaActual = paginaActual -1;
    if (nuevaPaginaActual === 0 ) return
    setPaginaActual(nuevaPaginaActual);
  }
  const paginaSiguiente = () =>{
    const nuevaPaginaActual = paginaActual + 1;
    if (nuevaPaginaActual > totalPaginas ) return
    setPaginaActual(nuevaPaginaActual);
  }
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscar de Imagines</p>
        <Formulario 
          setBuscar = { setBuscar }
        />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes = { imagenest }
        />

        { (paginaActual === 1) ? null :         
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        }
        { (paginaActual === totalPaginas) ? null : 
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaSiguiente}
          >
            siguiente &raquo;
          </button>        
        }
      </div>
    </div>
  );
}

export default App;
