import React from 'react';

class TamanhoFonte extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tamanho: 16
        }
    }

    aumentaFonte = () => {
        this.setState((estadoAnterior) => {
            return (
                estadoAnterior.tamanho++
            )
        })
    }

    diminuiFonte = () => {
        this.setState((estadoAnterior) => {
            return (
                estadoAnterior.tamanho --
            )
        })
    }

    render () {
        document.querySelector('body').style.fontSize = `${this.state.tamanho}px`
        return (
            
            <div className="btnGroup">
                <button className="btnComentario btnFontSize" onClick={this.aumentaFonte}>+A</button>
                <button className=" btnComentario btnFontSize" onClick={this.diminuiFonte}>-a</button>
            </div>
              
        )
    }
}

export default TamanhoFonte