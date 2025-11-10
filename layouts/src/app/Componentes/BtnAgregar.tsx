import React from 'react'
import { ProductoProp } from '../Modelos/ProductoProp'
import { useContextCarrito } from '../Providers/ProviderProducto'

export default function BtnAgregar({producto}:ProductoProp) {

    const {agregarCarrito}=useContextCarrito()

      const handleAgregar = () => {
    if (!producto || !producto.id) {
      alert("El producto no es válido o no tiene ID")
      return
    }

    agregarCarrito(producto)
  }


  return (
    
    <button type='button' onClick={(handleAgregar) => agregarCarrito(producto)} className='btn btn-success'>Agregar al carrito</button>

  )
}
