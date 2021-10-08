import React from 'react'
import '../styles/style-login.css'

const Login = () => {
    return (
        <div className="contenedor">
            <h1><span className="textoAzul">ARROW</span><span className="textoRojo">DEVS</span></h1>
            <h2>Iniciar Sesión</h2>
            <form className="login_form" action="buscar.html" id="forma" name="forma" method="GET" onsubmit="return">
                <div className="elemento">
                    <label for="usuario">E-mail o Usuario</label>
                    <input autocomplete="off" type="text" id="usuario" name="usuario" required="true" /> 
                </div> 
                <div className="elemento">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required="true" />
                </div>
                <div className="elemento">
                    <input type="submit" value="ENTRAR"/>    
                </div>
            </form>
        </div>
    )
}

export default Login


