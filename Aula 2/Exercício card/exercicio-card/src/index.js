import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function CardGato (props) {
    return (
        <div className="comentario">

            <img className="comentario__perfil" src={props.img} alt={props.description}/>
    
        <div>
            <h3 className="comentario__nome">{props.nome}</h3>
            <h4 className="comentario__subtitulo">{props.subtitulo}</h4>
            <hr className="comentario__hr"/>
            <p>{props.comentario}</p>
        </div>
        </div>
    )
}

function Gatos () {
    return (
        <div>
            <CardGato
                img="http://placekitten.com/g/400/400"
                description="Gato"
                nome="Carina"
                subtitulo="Cats are cute meow meow"
                comentario="I just saw other cats inside the house and nobody ask me before using my litter box love blinks and purr purr purr purr yawn meow to be let out when owners are asleep, cry for no apparent reason"
            />
            <CardGato
                img="http://placekitten.com/g/600/600"
                description="Gato"
                nome="Carina"
                subtitulo="Cats are cute boop boop"
                comentario="Ask to go outside and ask to come inside and ask to go outside and ask to come inside run around the house at 4 in the morning trip on catnip give attitude, and chirp at birds."
            />
        </div>
    )
}


// class Chocolate extends React.Component {
//     constructor() {
//         return ("oi")
//     }
// }



ReactDOM.render(<Gatos/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

