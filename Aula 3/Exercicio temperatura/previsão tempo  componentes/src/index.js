import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const previsao31_05 = {
    data: '31/05/2019',
    resumo: 'Ensolarado',
    imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
    descricao: "Sol",
    temperatura: {
        max: 31,
        min: 20
    }
}

const previsao01_06 = {
    data: '01/06/2019',
    resumo: 'Nublado',
    imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
    descricao: "Nuvens",
    temperatura: {
        max: 25,
        min: 18
    }
}


const Titulo = (props) => {
    return (
        <div>
            <h3 className="previsao__data">{props.data}</h3>
            <p className="previsao__resumo">{props.resumo}</p>
        </div>  
        )
    }

const Imagem = (props) => {
    return (
        <img className="previsao__img" src={props.imagem} alt={props.descricao}/>
    )
}

const Temperatura = (props) => {
    return (
        <div>
            <table>
                <tr className="previsao-temperatura__linha">
                    <th><strong>Máxima</strong></th>
                    <td>{props.temperatura.max} ºC</td>
                </tr>
                <tr className="previsao-temperatura__linha">
                    <th><strong>Mínima</strong></th>
                    <td>{props.temperatura.min} ºC</td>
                </tr>
            </table>
        </div>
    )
}
    
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
    
class Dados extends React.Component {
    render () {
        return (
            <div className="previsao__container">
                <Card 
                    data = {previsao31_05.data}
                    resumo = {previsao31_05.resumo}
                    imagem = {previsao31_05.imagem}
                    descricao = {previsao31_05.descricao}
                    temperatura = {previsao31_05.temperatura}
                />
                <Card 
                    data = {previsao01_06.data}
                    resumo = {previsao01_06.resumo}
                    imagem = {previsao01_06.imagem}
                    descricao = {previsao01_06.descricao}
                    temperatura = {previsao01_06.temperatura}
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
