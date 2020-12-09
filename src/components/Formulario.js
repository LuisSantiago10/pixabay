import React from 'react';

export const Formulario = () => {
    return (
        <form>
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="buscar la imagen deseas"
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
        </form>
    )
}
