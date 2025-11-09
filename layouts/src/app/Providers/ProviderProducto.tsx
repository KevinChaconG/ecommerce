'use client'
import React, { useEffect, useState, useContext } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { Producto } from '../Modelos/Producto'
import { contextCarrito } from '../Contexto/ContextCarrito';

export default function ProviderProducto({ children }: PlantillaReact) {

    let urlAPI = "http://localhost:5050/producto"
    const [producto, setProducto] = useState<Producto[]>([]);
    const [productosCarrito, setProductosCarrito] = useState<Producto[]>([]);

    async function cargarProducto() {

        try {
            const resp = await fetch(urlAPI)
            const data = await resp.json()
            setProducto(data)

            console.log(producto)

        } catch (error) {
            console.log('Ocurrió un error al invocar el servicio')
        }

    }

    async function guardarProducto(producto: Producto) {
        try {

            const respuesta = await fetch(urlAPI, {
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

            const respuesta = await fetch(urlAPI + "/" + idProducto, {
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

            const respuesta = await fetch(urlAPI+'/'+producto.id, {
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

    function agregarCarrito(producto: Producto) {
        alert('Producto agregado al carrito')
        setProductosCarrito([...productosCarrito, producto]);
    }

    return (
        <contextCarrito.Provider value={{ producto, productosCarrito, agregarCarrito, guardarProducto, eliminarProducto, actualizarProducto}}>
            {children}
        </contextCarrito.Provider>
    )
}

export function useContextCarrito() {
    return useContext(contextCarrito)
}
