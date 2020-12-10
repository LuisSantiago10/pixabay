import React, { useState } from 'react';
import { MensajeError } from './MensajeError';

export const Formulario = ({setBuscar}) => {
    const [termino, setTermino] = useState('');
    const [errorTermino, setErrorTermino] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();
        if (termino.trim() === '') {
            setErrorTermino(true);
            return;
        }

        setErrorTermino(false);
        setBuscar(termino);
    }

    return (
        <form
            onSubmit={ buscarImagenes }
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="buscar la imagen deseas"
                        onChange={ e => setTermino(e.target.value) }
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            { errorTermino ? <MensajeError mensaje= "Agregar un termino" /> : null }
        </form>
    )
}
