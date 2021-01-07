import React, { Component } from 'react'
import DefaultContainer from '../supp/DefaultContainer'
import styled from 'styled-components'

const Cardzin = styled.div`
    border: solid 1px black;
    border-radius: 30px;
    margin: 5px;
    padding: 5px;
    height: 300px;
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
                </div>
            </Cardzin>
        )
    }
}

export default Cards