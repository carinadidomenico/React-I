import React from 'react';

function Comentarios (props) {
    return (
        <div className="comentario">

            <img className="comentario__perfil" src={props.img} alt={props.description}/>
    
        <div>
            <h3 className="comentario__nome">{props.nome}</h3>
            <h4 className="comentario__subtitulo">{props.subtitulo}</h4>
            <hr className="comentario__hr"/>
            <p>{props.comentario}</p>
        </div>
        </div>
    )
}

export default Comentarios