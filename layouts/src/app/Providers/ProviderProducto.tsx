'use client'
import React, { useEffect, useState, useContext } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { Producto } from '../Modelos/Producto'
import { contextCarrito } from '../Contexto/ContextCarrito';

export default function ProviderProducto({ children }: PlantillaReact) {

    let urlProducto = "http://localhost:5050/producto"
    let urlCarrito = "http://localhost:5050/carrito"
    const [producto, setProducto] = useState<Producto[]>([]);
    const [productosCarrito, setProductosCarrito] = useState<Producto[]>([]);

    async function cargarProducto() {

        try {
            const resp = await fetch(urlProducto)
            const data = await resp.json()
            setProducto(data)

            console.log(producto)

        } catch (error) {
            console.log('Ocurrió un error al invocar el servicio')
        }

    }

    async function guardarProducto(producto: Producto) {
        try {

            const respuesta = await fetch(urlProducto, {
                method: 'POST',
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(producto)
            })

            const resultado = await respuesta.json()
            alert("Producto agregado correctamente")

            cargarProducto()

        } catch (error) {
            alert("Ocurrió un error" + error)

        }
    }

    async function eliminarProducto(idProducto: number) {

        try {

            const respuesta = await fetch(urlProducto + "/" + idProducto, {
                method: 'DELETE',
                headers: {
                    "content-Type": "application/json"
                }
            })

            const resultado = await respuesta.json()
            alert("Producto eliminado correctamente")

            cargarProducto()

        } catch (error) {
            alert("Ocurrió un error al intentar eliminar el Producto")
        }

    }

    async function actualizarProducto(producto: Producto) {
        try {

            const respuesta = await fetch(urlProducto+'/'+producto.id, {
                method: 'PUT',
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(producto)
            })

            const resultado = await respuesta.json()
            alert("Producto actualizado correctamente")

            cargarProducto()

        } catch (error) {
            alert("Ocurrió un error" + error)

        }
    }

    useEffect(() => {
        cargarProducto()

    }, []);

    useEffect(() => {
        console.log(producto)
    }, [producto])

    //function agregarCarrito(producto: Producto) {
     //   alert('Producto agregado al carrito')
       // setProductosCarrito([...productosCarrito, producto]);
    //}

    async function agregarCarrito(producto:Producto){

        try {

            const respuesta=await fetch(urlCarrito,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ productoId: producto.id })
            })

            const resultado=await respuesta.json()
            alert("Producto agregado al carrito correctamente")
            setProductosCarrito([...productosCarrito, producto])

            cargarProducto()
            
        } catch (error) {
            alert("Ocurrió un error"+error)
            
        }

    }

       async function eliminarCarrito(idCarrito: number) {

        try {

            const respuesta = await fetch(urlCarrito + "/" + idCarrito, {
                method: 'DELETE',
                headers: {
                    "content-Type": "application/json"
                }
            })

            const resultado = await respuesta.json()
            alert("Producto eliminado del carrito")

            cargarProducto()

        } catch (error) {
            alert("Ocurrió un error al intentar eliminar el Producto")
        }

    }



    return (
        <contextCarrito.Provider value={{ producto, productosCarrito, agregarCarrito, guardarProducto, eliminarProducto, actualizarProducto, eliminarCarrito}}>
            {children}
        </contextCarrito.Provider>
    )
}

export function useContextCarrito() {
    return useContext(contextCarrito)
}
