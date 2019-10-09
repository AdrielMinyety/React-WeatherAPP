import React from 'react';

function CardClima ({climaBusqueda}) {
    // destructuring a los datos del API
    // desctructuring the Data from the API
    const { name, main, weather } = climaBusqueda;
    // cambiar la temperatura del clima a celcius
    // change temp from the weather to celcious
    let kelvin = 273.15;
    // si no existe busqueda, cargar texto
    // if does not exist data, load text
    if(!name) return <h2 className='text-center'>Search Weather</h2>;
    // si hay datos, cargar componente
    // if there is data, load component
    return (
        <div className="card bg-secondary shadow font-weight-bold">
            <h2 className="card-header text-center p-2">Weather {"from " + climaBusqueda.name}</h2>
            <div className="card-body bg-light text-dark">
                <div className="card-text">
                    <p className="text-info">
                        <span className="text-capitalize">{weather[0].description}</span> and the humidity is {main.humidity}%.</p>
                </div>
                <div className="row">
                    <p className="m-0 col">Temp: <br/><span className="text-primary">{ parseInt( main.temp - kelvin, 10 ) } &#x2103;</span></p>
                    <p className="m-0 col">Min: <br/><span className="text-primary">{ parseInt( main.temp_min - kelvin, 10 ) } &#x2103;</span></p>
                    <p className="m-0 col">Max: <br/><span className="text-primary">{ parseInt( main.temp_max - kelvin, 10 ) } &#x2103;</span></p>
                </div>
            </div>
        </div>
    )
}
export default CardClima;