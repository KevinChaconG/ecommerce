'use client'
import { useContextCarrito } from '@/app/Providers/ProviderProducto'
import React from 'react'
import Producto from '@/app/Componentes/Producto'
import BtnAgregar from '@/app/Componentes/BtnAgregar'

export default function page() {

  const { producto, agregarCarrito } = useContextCarrito()
  return (

    <div className='container'>
      <div className='row'>
        {
          producto.map((item) => (
            <div className='col md-3' key={item.id}>
            <Producto producto={item}></Producto>
            <BtnAgregar producto={item}></BtnAgregar>
            </div>

          ))
        }

      </div>

    </div>



  )
}
