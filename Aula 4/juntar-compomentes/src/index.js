import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dados from "./componentes/previsão/Dados"
import TamanhoFonte from "./componentes/fonte/TamanhoFonte"
import * as serviceWorker from './serviceWorker';
// import Conteudo from './componentes/comentarios/Conteudo'
import Comentarios from './componentes/comentarios/Comentarios'
import comentarios from './dados/comentarios'


class App extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            visibilidade: false
        }
    }

    mudarVisibilisade = e => {
        e.preventDefault()
        this.setState ((estadoanterior) => {
            return ({
                visibilidade: !estadoanterior.visibilidade
            })
        })
    }
    render () {
        return (
            <div>
                <Dados/>
                <TamanhoFonte/>
                <button onClick={this.mudarVisibilisade} className="btnComentario">
                {this.state.visibilidade ? 'Esconder comentários' : 'Mostrar comentários' }
                </button>
                {this.state.visibilidade && comentarios.map(() => {
                    return (
                        <Comentarios/>
                        )
                })}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
        
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();