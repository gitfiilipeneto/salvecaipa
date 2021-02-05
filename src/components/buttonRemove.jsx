import React, { Component } from 'react'
// import {Button} from '../supp/CardsAssets'

class removeOne extends Component{

    constructor(props){
        super(props){
            this.state = {
                items: 0
            }
        }
    }

    render(){
        return(
            <button onClick={() => this.setState({ items: this.state.items + 1 })}>
                remove
            </button>
        )
    }
}

export default removeOne