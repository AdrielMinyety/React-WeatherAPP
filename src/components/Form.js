import React, {useState} from 'react';          
            // [PROPS]
function Form({obtenerDatos}) {
    // crear state usando useState
    // make State using useState
    const [busqueda, guardarbusqueda] = useState({
        ciudad : "",
        pais : ""
    })
    // si los datos del formulario cambian, guardar en el state.
    // if the form's data change, set state
    const handleChange = e => {
        guardarbusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    // detectar evento submit y enviar datos a APP.
    // detect event submit and send data to APP
    const hacerBusqueda = e => {
        e.preventDefault();
        obtenerDatos(busqueda);
    }
    return (
        <form onSubmit={ hacerBusqueda }>
            <div className="input-group">
                <input 
                    type="text" 
                    name="ciudad" 
                    id="ciudad"
                    placeholder="City"
                    className="form-control font-weight-bold mb-4"
                    onChange={ handleChange }
                    />
            </div>
            <div className="input-group">
                <select onChange={ handleChange } name="pais" className="custom-select font-weight-bold">
                    <option value="">-- Choose country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="DO">Republica Dominicana</option>
                    <option value="VE">Venezuela</option>
                    <option value="CO">Colombia</option>
                    <option value="MX">México</option>
                    <option value="ES">España</option>
                </select>
            </div>
            <div className="input-group">
                <input 
                    className="btn btn-success btn-block text-dark mt-4 font-weight-bold"
                    type="submit" 
                    value="What´s the weather like?"
                />
            </div>
        </form>
    );
}
export default Form;