'use client'
import { Producto } from '@/app/Modelos/Producto';
import { useContextCarrito } from '@/app/Providers/ProviderProducto'
import React, { useState } from 'react'

export default function page() {

    const { guardarProducto, producto, eliminarProducto, actualizarProducto } = useContextCarrito();



    const [idProducto, setIdProducto] = useState<number>(0)
    const [nombreProducto, setNombreProducto] = useState<string>('')
    const [precioProducto, setPrecioProducto] = useState<string>('')
    const [isvProducto, setIsvProducto] = useState<string>('')
    const [urlProducto, setUrlProducto] = useState<string>('')
    const [accion, setAccion] = useState<number>(0)

    function agregarProducto() {

        if (accion == 2) {

            let producto: Producto = {
                id: idProducto,
                nombreProducto: nombreProducto,
                precioProducto: parseFloat(precioProducto),
                isvProducto: parseFloat(isvProducto),
                imagenProducto: urlProducto
            }

            actualizarProducto(producto)

        } else {

            let producto: Producto = {
                id: 0,
                nombreProducto: nombreProducto,
                precioProducto: parseFloat(precioProducto),
                isvProducto: parseFloat(isvProducto),
                imagenProducto: urlProducto
            }

            guardarProducto(producto)
        }

        setAccion(0);

        setIdProducto(0)
        setNombreProducto("")
        setPrecioProducto('')
        setUrlProducto("")
        setIsvProducto("")
    }


    function asignarProducto(item: Producto) {

        setAccion(2);

        setIdProducto(item.id)
        setNombreProducto(item.nombreProducto)
        setPrecioProducto(item.precioProducto.toString())
        setIsvProducto(item.isvProducto.toString())
        setUrlProducto(item.imagenProducto)
    }

    return (
        <div className='container'>
            <br></br>

            <form className='form' action="">
                <input type='text' className='form-control' placeholder='Ingrese el nombre del producto' value={nombreProducto} onChange={(e) => setNombreProducto(e.target.value)}></input> <br></br>
                <input type='text' className='form-control' placeholder='Ingrese el precio del producto' value={precioProducto} onChange={(e) => setPrecioProducto(e.target.value)}></input> <br></br>
                <input type='text' className='form-control' placeholder='Ingrese URL de la imagne del producto' value={urlProducto} onChange={(e) => setUrlProducto(e.target.value)}></input> <br></br>
                <input type='text' className='form-control' placeholder='Ingrese el ISV del producto' value={isvProducto} onChange={(e) => setIsvProducto(e.target.value)}></input> <br></br>

                <button type='button' className='btn btn-success' onClick={agregarProducto}>Guardar Producto</button>

            </form> <br></br>

            <table className='table'>
                <thead>
                    <th>ID Producto</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>ISV</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                </thead>

                <tbody>
                    {
                        producto.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombreProducto}</td>
                                <td>{item.precioProducto}</td>
                                <td>{item.imagenProducto}</td>
                                <td>{item.isvProducto}</td>
                                <td><button type='button' className='btn btn-danger btn-sm' onClick={() => eliminarProducto(item.id)}>Eliminar</button></td>
                                <td><button type='button' className='btn btn-warning btn-sm' onClick={() => asignarProducto(item)}>Editar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
