import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let contador = 0;
const nome = {
    nome: "Carina",
    sobrenome: "Di Domenico"
}

setInterval(() => {
    contador++

    function verificaNum(contador){
        if(contador === 0){
            return <p>contador não iniciado</p>
        }
        else {
            return <p>contador iniciado</p>
        }
    }
    
    const template =
        <div>
            <h1 className="contador">Contador: {contador}</h1>
            <h2> Oi, {nome.nome + " " + nome.sobrenome}</h2>
            <button>+1</button>
            <button>-1</button>
            <button>reset</button>
            <p>{verificaNum(contador)}</p>
        </div>
    ReactDOM.render(template, document.getElementById("root"))

}, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



