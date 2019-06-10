import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const numero = 0
const nome = {
    nome: "Carina",
    sobrenome: "Di Domenico"
}

function nomeCompleto (nome) {

    if (nome) {
        return nome.nome + " " + nome.sobrenome
    }
    else {
        return ("desconhecida")
    }
}

const template = 
<div>
    <h1>Count: {numero}</h1>
    <h2>Oi, {nome.nome}</h2>
    <h3>Olá {nomeCompleto(nome)}</h3>
    <div>
        <button>+1</button>
        <button>-1</button>
        <button>reset</button>
    </div>
</div>

ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
