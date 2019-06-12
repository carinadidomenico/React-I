import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Cards extends React.Component {
    render() {
        return ( 
            <div class="previsao">
                    <h3 className="previsao__data">{this.props.data}</h3>
                    <p className="previsao__resumo">{this.props.resumo}</p>
                    <img className="previsao__img" src={this.props.imagem} alt={this.props.descricao}/>
                    <table>
                        <tr className="previsao-temperatura__linha">
                            <th><strong>Máxima</strong></th>
                            <td>{this.props.max}</td>
                        </tr>
                        <tr className="previsao-temperatura__linha">
                            <th><strong>Mínima</strong></th>
                            <td>{this.props.min}</td>
                        </tr>
                    </table>
            </div>
        )
    }
}

class Dados extends React.Component {
    render () {
        return (
            <div className="previsao-container">
                <Cards
                    data = "31/05/2019"
                    resumo = "Ensolarado"
                    imagem = "https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png"
                    descricao = "Sol"
                    max = "31ºC"
                    min = "20ºC"
                />
                <Cards
                    data = "01/06/2019"
                    resumo = "Nublado"
                    imagem = "https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png"
                    descricao = "Nuvens cinzas"
                    max = "25ºC"
                    min = "18ºC"
                />
            </div>
        )
    }
}

ReactDOM.render(<Dados/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
