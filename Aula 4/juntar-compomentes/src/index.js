import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dados from "./componentes/previsão/Dados"
import TamanhoFonte from "./componentes/fonte/TamanhoFonte"
import * as serviceWorker from './serviceWorker';
import Comentarios from './componentes/comentarios/Comentarios'
import comentarios from "./dados/comentarios";


class App extends React.Component {
    render () {
        return (
            <div>
                <Dados/>
                <TamanhoFonte/>
                <Comentarios/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
        
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();