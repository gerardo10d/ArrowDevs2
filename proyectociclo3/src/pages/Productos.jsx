import React from 'react'
import '../styles/estilos-productos.css'

const Productos = () => {
    return (
    <div id="tabla-precios">

      <div className="precio-col">
        <div className="precio-col-header">
            <h3>VERDURAS</h3>
            <p>Productos del Agro Colombiano</p>
        </div>

        <div className="precio-col-features">
            <p>Lechuga</p>
            <p>Arveja</p>
            <p>Espinaca</p>
            <p>Tomate</p>
            <p>Pepino</p>
        </div>

      <div className="precio-col-comprar">
      <a>Comprar</a>
      </div>
      </div>

      <div className="precio-col">
      <div className="precio-col-header">
      <h3>FRUTAS</h3>
      <p>Toda la variedad del campo a tu mesa</p>
      </div>

      <div className="precio-col-features">
      <p>Papaya</p>
      <p>Banano</p>
      <p>Manzana</p>
      <p>Fresas</p>
      <p>Aguacate</p>
      </div>

      <div className="precio-col-comprar">
      <a>Comprar</a>
      </div>
      </div>

      <div className="precio-col">
      <div className="precio-col-header">
      <h3>Carnes</h3>
      <p>Calidad y Frescura</p>
      </div>

      <div className="precio-col-features">
      <p>Res</p>
      <p>Cerdo</p>
      <p>Pollo</p>
      <p>Pescado</p>
      <p>Huevos</p>
      </div>

      <div className="precio-col-comprar">
        <a>Comprar</a>
        </div>
        </div>

        <div className="precio-col">
          <div className="precio-col-header">
          <h3>Lacteos</h3>
          <p>Calidad Garantizada</p>
          </div>
    
        <div className="precio-col-features">
          <p>Queso</p>
          <p>Leche</p>
          <p>Yogurth</p>
          <p>Quajada</p>
          <p>Mantequilla</p>
          </div>
    
        <div className="precio-col-comprar">
            <a>Comprar</a>
            </div>
            </div>

    </div>
    )
}

export default Productos
