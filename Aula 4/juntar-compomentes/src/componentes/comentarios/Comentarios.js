import React from 'react';
import comentarios from '../../dados/comentarios';
import Conteudo from './Conteudo'

class Comentarios extends React.Component {
    render () {
      return (
        <div className="comentario__container">
          {comentarios.map( (item) => {
            return (
              <Conteudo
                  nome={item.nome}
                  img={item.img}
                  descricao={item.descricao}
                  subtitulo={item.subtitulo}
                  comentario={item.comentario}
              />
            )
          })}
        </div>
      )
    }
  }

export default Comentarios