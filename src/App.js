import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Alert from './components/Alert';
import CardClima from './components/CardClima';

// USANDO HOOKS EN REACT
// USING HOOKDS IN REACT
function App() {

  // crear state usando useState
  // make State using useState
  const [ciudad, guardarCiudad] = useState("");
  const [pais, guardarPais] = useState("");
  const [error, guardarError] = useState(false);
  const [climaBusqueda, guardarClimaBusqueda] = useState({});

  useEffect(() => {
    // detectar si el state está vacío o si cambia para hacer la busqueda
    // detect if the state is empty or if it changes to make the search 
    if(ciudad === "" || pais === "") return;
    const consultarApi = async () => {
      let token = "7d569afd4e17320f89f82a6fa1802587";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${token}`;

      const resultado = await fetch(url);
      const clima = await resultado.json();
      guardarClimaBusqueda(clima);
    }
    consultarApi();
  }, [ciudad, pais])


  const obtenerDatos = datos => {
    // obtener datos del formulario mediante PROPS
    // get the form's data through PROPS
    if (datos.ciudad === "" || datos.pais === "") {
      guardarError(true);
      return;
    }
    // Guardando en el state
    // Seting State
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  // cargar componentes condicionalmente
  // Load components conditionally
  let component;
  // si hay errores mostrar alert, de lo contrario mostrar resultados
  // if there are errors show alert, if not, show results
  if (error) {
    component = <Alert mensaje="Empty field" tipo="danger"/>
  } else if (climaBusqueda.cod === "404"){
    component = <Alert mensaje={"[ "+ ciudad + " ] is not found in ["+ pais +"]"} tipo="warning"/>
  } else {
    // mostrar clima
    // show weather
    component = <CardClima climaBusqueda={climaBusqueda} />;
  }

  return (
    <div className="container-fluid pb-5">      
      <h1 className="text-center py-2">WeatherAPP</h1>
      <div className="card bg-dark text-white shadow mx-auto my-4 p-4" style={{maxWidth:90 + "vw"}}>
        <div className="row">
          <div className="col-md-6 mb-4">
            <Form
              obtenerDatos={obtenerDatos}
            />
          </div>
          <div className="col-md-6">
            {component}
          </div>
        </div>
      </div>  
      <div className="footer bg-dark fixed-bottom p-2">
          <h6 className="text-center text-white m-0">Web made by Adriel Minyety Gonzalez</h6>
      </div>
    </div>
  );
}

export default App;
