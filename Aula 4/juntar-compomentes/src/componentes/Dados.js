import React from 'react';
import Card from './Card'


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

export default Dados