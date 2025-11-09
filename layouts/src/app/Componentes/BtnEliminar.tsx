import React from 'react'
import { ProductoProp } from '../Modelos/ProductoProp'

export default function BtnEliminar({producto}:ProductoProp) {

    function eliminarProduct(){
        alert('Producto Eliminado')
    }
  return (
    <div>
        <button className='btn btn-danger' onClick={eliminarProduct}>Elimnar Producto</button>
    </div>
  )
}
