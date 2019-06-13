import React from 'react';
import Titulo from './Titulo';
import Imagem from './Imagem';
import Temperatura from './Temperatura'


class Card extends React.Component {
    render () {
        return (
            <div className="previsao">
                <Titulo
                    data = {this.props.data}
                    resumo = {this.props.resumo}
                />
                <Imagem
                    imagem = {this.props.imagem}
                    descricao = {this.props.imagem}
                />
                <Temperatura
                    temperatura = {this.props.temperatura}
                />
            </div>
        )
    }
}

export default Card