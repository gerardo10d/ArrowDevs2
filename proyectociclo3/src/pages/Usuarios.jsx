import React from 'react'
import '../styles/estilos-usuarios.css'

const Usuarios = () => {
    return (
        <div>
            <table border="1" class="tablaRegistroUsuario">
            <tr> 
                <th>Codigo</th>
                <th>Nombre(s)</th>
                <th>Apellido(s)</th>
                <th>E-mail</th>
            </tr>
            <tr>
                <td>000001</td>
                <td>Jhon </td>
                <td>Alvarez</td>
                <td>jalvarez@mail.com</td>
            </tr>
            <tr>
                <td>000002</td>
                <td>Jorge</td>
                <td>Romero</td>
                <td>jromero@mail.com</td>
            </tr>
            <tr>
                <td>000003</td>
                <td>Gerardo</td>
                <td>Dorado</td>
                <td>gdorado@mail.com</td>
            </tr>
            <tr>
                <td>000004</td>
                <td>Paula</td>
                <td>Pardo</td>
                <td>ppardo@mail.com</td>
            </tr>
            <tr>
                <td>000005</td>
                <td>Julián</td>
                <td>Gallo</td>
                <td>jgallo@mail.com</td>
            </tr>
        </table>
        </div>
    )
}

export default Usuarios
