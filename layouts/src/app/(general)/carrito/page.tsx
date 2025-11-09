'use client'
import React, { useContext } from 'react'
import Producto from '@/app/Componentes/Producto'
import { useContextCarrito } from '@/app/Providers/ProviderProducto'
import BtnAgregar from '@/app/Componentes/BtnAgregar'
import BtnEliminar from '@/app/Componentes/BtnEliminar'

export default function page() {
  const { producto, productosCarrito } = useContextCarrito()
  return (
    <div className='container'>

      <div className='row'>
        <div className='col-md-8'>
          <div className='row'>
            {

              productosCarrito.map((item) => (
                <div className='col-md-3'>
                  <Producto producto={item} key={item.id}></Producto>
                  <BtnEliminar producto={item}></BtnEliminar>
                </div>
              ))
            }

          </div>
        </div>

        <div className='col-md-4'>
          <div className='row'>
            {
              producto.map((item) => (
                <>
                  <Producto producto={item} key={item.id}></Producto>
                  <BtnAgregar producto={item}></BtnAgregar>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
