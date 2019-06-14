import React from 'react';

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

export default Temperatura
