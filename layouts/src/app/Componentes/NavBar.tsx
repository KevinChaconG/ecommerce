'use client'
import React from 'react'
import Link from 'next/link'
import { useContextCarrito } from '../Providers/ProviderProducto'
import { usuarioContext } from '../Providers/ProviderUsuario';

export default function NavBar() {

    const { productosCarrito } = useContextCarrito();
    const { nombreUsuario } = usuarioContext()

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="/productos">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/productos">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/carrito">
                                    Carrito
                                    <button type='button' className='btn btn-warning btn-sm'>{productosCarrito.length}</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/mantenimientoProducto">Mantenimiento Producto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="./">Cerrar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                    <p className='nav-item'>Usuario Conectado: {nombreUsuario}</p>
                </div>
            </nav>

        </>
    )
}
