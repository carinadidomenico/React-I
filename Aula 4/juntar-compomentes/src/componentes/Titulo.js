import React from 'react';


const Titulo = (props) => {
    return (
        <div>
            <h3 className="previsao__data">{props.data}</h3>
            <p className="previsao__resumo">{props.resumo}</p>
        </div>  
        )
    }

export default Titulo