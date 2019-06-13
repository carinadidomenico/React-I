import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let contador = 0;

class Contador extends React.Component () {
    somarUm = () => {
        contador++
        console.log(contador)
        ReactDOM.render(<Contador/>, document.getElementById("root"))
    }

    subtrairUm = () => {
        contador--
        console.log (contador)
        ReactDOM.render(<Contador/>, document.getElementById("root"))
    }

    reset = () => {
        contador = 0 
        console.log (contador)
        ReactDOM.render(<Contador/>, document.getElementById("root"))
    }

    render() {
        return (<div>
                <h1 className="contador">Contador: {contador}</h1>
                <button onClick={this.somarUm}>+1</button>
                <button onClick={this.subtrairUm}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>)
    }
}

ReactDOM.render(<Contador/>, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



