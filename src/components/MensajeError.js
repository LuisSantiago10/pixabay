import React from 'react'

export const MensajeError = ({mensaje}) => {
    return (
            <p className="my-3 p-4 text-center alert alert-primary">Error: { mensaje }</p>
    )
}
