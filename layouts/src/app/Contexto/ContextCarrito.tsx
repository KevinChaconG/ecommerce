import { createContext } from "react";
import { Producto } from "../Modelos/Producto";

export const contextCarrito=createContext({
    producto:[] as Producto[],
    productosCarrito: [] as Producto [],
    agregarCarrito: (producto: Producto) =>{},
    guardarProducto: (producto:Producto)=>{},
    eliminarProducto:(idProducto:number)=>{},
    actualizarProducto:(producto:Producto)=>{},
    eliminarCarrito:(idCarrito:number)=>{},
    
})