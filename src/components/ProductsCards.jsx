import React, { Component } from 'react'
import DefaultContainer from '../supp/DefaultContainer'
import styled from 'styled-components'
import { SABORES, ESPECIARIAS} from '../supp/CardsAssets'

const Cardzin = styled.div`
    border: solid 1px black;
    border-radius: 30px;
    margin: 5px;
    padding: 5px;
    height: auto;
`
const Styledh1 = styled.h1`

`

class Cards extends Component{
    render(){
        return(
            <Cardzin>
                <div>
                    <p>{this.props.imagem}</p>

                    <h1>{this.props.title}</h1>

                    <h2>{this.props.description}</h2>

                    <table>
                        <tr>
                            <th>Sabor</th>
                            <th>teste</th>
                        </tr>

                        <tr>
                            <td>
                                {SABORES.map((sabor, index) => 
                                <li key = {index}>{sabor}</li>
                                )}
                            </td>

                            <td>
                                {SABORES.map((sabor, index) => 
                                <li key = {index}><button>+</button></li>
                                )}
                            </td>       
                        </tr>                        
                    </table>

                    <ul>
                        <p>Especiarias</p>
                            {ESPECIARIAS.map((especiaria,index) => 
                            <li key={index}>{especiaria}</li>)}
                    </ul>
                </div>
            </Cardzin>
        )
    }
}

export default Cards