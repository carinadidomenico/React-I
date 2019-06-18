import React from 'react'

class Conteudo extends React.Component {
    render () {
        return (
            <div className="comentario">

                <img className="comentario__perfil" src={this.props.img} alt={this.props.description}/>
    
                <div>
                    <h3 className="comentario__nome">{this.props.nome}</h3>
                    <h4 className="comentario__subtitulo">{this.props.subtitulo}</h4>
                    <hr className="comentario__hr"/>
                    <p>{this.props.comentario}</p>
                </div>
            </div>
        )
    }
}

export default Conteudo