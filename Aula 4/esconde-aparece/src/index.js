import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class EscondeAparece extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            visibilidade: false
        }
    }

    mudarVisibilisade = () => {
        this.setState ((estadoanterior) => {
            return ({
                visibilidade: !estadoanterior.visibilidade
            })
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Esconde-Aparece</h1>
                <button onClick={this.mudarVisibilisade.bind(this.visibilidade)}>{this.state.visibilidade ? 'Esconder detalhes' : 'Mostrar detalhes'}</button>
                <p>{this.state.visibilidade ? 'Vocês são maravilhosas' : ''}</p>
            </div>
        )
    }
}

ReactDOM.render(<EscondeAparece />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();