import React from 'react';
import Card from './Card'
import previsoes from '../../dados/previsoes';

class Dados extends React.Component {
  render () {
    return (
      <div className = "previsao__container">
        {previsoes.map( (item) => {
          return (
            <Card
                data={item.data}
                resumo={item.resumo}
                imagem={item.imagem}
                temperatura={item.temperatura}
            />
          )
        })}
      </div>
    )
  }
}
    
export default Dados