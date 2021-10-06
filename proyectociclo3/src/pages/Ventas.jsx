import '../styles/estilos-ventas.css'
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ventas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [ventas, setVentas] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Registrar nueva venta');
    //const [colorBoton, setColorBoton] = useState('indigo');
  
  
    useEffect(() => {
      if (mostrarTabla) {
        setTextoBoton('Registrar nueva venta');
        //setColorBoton('indigo');
      } else {
        setTextoBoton('Mostrar todas las ventas');
        //setColorBoton('green');
      }
    }, [mostrarTabla]);
    return (
      <div className='flex_h-full_w-full_flex-col_items-center_justify-start_p-8'>
        <div className='flexFlexCol'>
          <h3 className='tituloPrincipal'>
            Página de administración de ventas
          </h3>
          <button
            onClick={() => {
              setMostrarTabla(!mostrarTabla);
            }}
            className='text-white_bg-gray-500_p-5_rounded-full_m-6_w-28_self-end'
          >
            {textoBoton}
          </button>
        </div>
        {mostrarTabla ? (
          <TablaVentas listaVentas={ventas} />
        ) : (
          <FormularioCreacionVentas
            setMostrarTabla={setMostrarTabla}
            listaVentas={ventas}
            setVentas={setVentas}
          />
        )}
        <ToastContainer position='bottom-center' autoClose={5000} />
      </div>
    );
}


// Componente del formulario de registro de ventas
const FormularioCreacionVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
    const form = useRef(null);
  
    const submitForm = (e) => {
      e.preventDefault(); // Evitar acción por defecto al enviar formulario
      const fd = new FormData(form.current); // FormData es una función que extrae los datos del form
  
      const nuevoVenta = {};
      fd.forEach((value, key) => {
        nuevoVenta[key] = value;
      });
      
      setMostrarTabla(true);
      toast.success('Venta agregada con éxito')
      setVentas([...listaVentas, nuevoVenta]);
    };
  
    return (
        <div className='formVentas'>
        <h4 className='tituloPrincipal'>Registrar nueva venta</h4>
        <form ref={form} onSubmit={submitForm} className='formVentas'>
            <label htmlFor="codigo" className='flexFlexCol'>
                Código de la venta
                <input 
                name='codigo'
                type="number"
                min={1}
                required
                 />
            </label>
            <label htmlFor="nombre" className='flexFlexCol'>
                Nombre del producto
                <input 
                name='nombre'
                type="text"
                placeholder='Ej: Yogurt'
                required
                 />
            </label>
            <label htmlFor="cantidad" className='flexFlexCol'>
                Cantidad del producto
                <input 
                name='cantidad'
                type="number"
                min={1}
                required
                 />
            </label>
            <label htmlFor="unidad" className='flexFlexCol'>
                Unidad
                <select name='unidad' defaultValue={0} required >
                    <option disabled value={0}>Seleccione una opción</option>
                    <option>Litros</option>
                    <option>Libras</option>
                </select>
            </label>
            <label htmlFor="valor" className='flexFlexCol'>
                Valor de la venta
                <input 
                name='valor'
                type="number"
                min={1}
                required
                 />
            </label>
            <button
                type='submit'
                >
                Registrar venta                    
            </button>
        </form>
    </div>
    );
  };


// Tabla donde quedan registradas las ventas

const TablaVentas = ({ listaVentas }) => {
    useEffect(() => {
      console.log('este es el listado de ventas en el componente de tabla', listaVentas);
    }, [listaVentas]);
    return (
      <div className='flex-flexCol-itemsCenter-justifyCenter'>
        <h2 className=''>Lista de ventas</h2>
        <table className="tabla">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Unidad</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {listaVentas.map((venta) => {
              return (
                <tr>
                  <td>{venta.codigo}</td>
                  <td>{venta.nombre}</td>
                  <td>{venta.cantidad}</td>
                  <td>{venta.unidad}</td>
                  <td>{venta.valor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

export default Ventas
