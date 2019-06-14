import React from 'react';

const Imagem = (props) => {
    return (
        <img className="previsao__img" src={props.imagem} alt={props.descricao}/>
    )
}

export default Imagem