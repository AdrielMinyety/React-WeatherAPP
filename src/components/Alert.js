import React from 'react';
function Alert ({mensaje, tipo}) {
    let tipoAlert = `alert alert-${tipo} font-weight-bold`;
    return(
        <div className={tipoAlert} role="alert">
           {mensaje}
        </div>
    )
}
export default Alert;
