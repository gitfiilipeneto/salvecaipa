import React, { Component } from 'react'
// import addMoreOne from './buttonAddMore'
import ListadeCaipas from './teste_NovaCaipa'


class App extends Component{

    constructor(){
        super()

        this.state = {
            caipas : []
        }
    }

    //  maisCaipa(){

        
    //     this.setState({
    //         caiṕas: this.caipas + 1
    //     })
        
    // }    
   
    render(){
    
        return(
            <div>
                <ListadeCaipas caipas = {[1,1]} />
                {/* <button onClick={this.maisCaipa()}> AAAA </button> */}
               
            </div>

        )
    }
}

export default App