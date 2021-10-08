import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/estilos.css'
import Logo from '../media/logo.ico'

const Navbar = () => {
    return (
        
        <ul className="navbar">

            <Link to='/'>
                <li>
                    <img src={Logo} alt="logo ArrowDevs" className="logo"/>
                </li>
            </Link>
            <Link to='/ventas'>
                <li>
                    <button className="botonGenerico mainButton">Ventas</button>
                </li>
            </Link>
            <Link to='/productos'>
                <li>
                    <button className="botonGenerico mainButton">Productos</button>
                </li>
            </Link>

            <Link to='/usuarios'>
                <li>
                    <button className="botonGenerico mainButton">Usuarios</button>
                </li>
            </Link>
            
            <Link to='/login'>
                <li>
                    <button className="botonGenerico mainButton">Login</button>
                </li>
            </Link>
            
        </ul>
        
    )
}

export default Navbar
