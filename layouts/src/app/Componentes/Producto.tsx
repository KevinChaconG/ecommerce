import React from 'react'
import { ProductoProp } from '../Modelos/ProductoProp'

export default function Producto({ producto }: ProductoProp) {
    return (
        <div className='card'>
            <div className='card-header'>
                {producto.nombreProducto}
            </div>
            <div className='card-body'>
                <img src={producto.imagenProducto} alt='imagen producto' className='img-thumbnail' style={{ height: '150px' }}></img> <br></br>
                Precio Producto: {producto.precioProducto}<br></br>
                ISV: {producto.isvProducto}


            </div>
        </div>
    )
}
