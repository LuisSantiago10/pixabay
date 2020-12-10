import React from 'react';
import { ImagenesNew } from './ImagenesNew';


export const ListadoImagenes = ({imagenes}) => {
    return (
        <div className="col-12 p-5 row">
            { imagenes.map(imagen => (
              <ImagenesNew 
                key={imagen.id}
                imagen={imagen}
              />  
            )) }
        </div>
    )
}
