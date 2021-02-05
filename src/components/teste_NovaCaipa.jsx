import React, { Component } from "react";
// import addMoreOne from "./buttonAddMore";
import Cards from "./ProductsCards";

class ListadeCaipas extends Component{


    render(){

        return(

            <ul>
                {this.props.caipas.map((caipa, index) => {
                    return(

                    <li key={index}>
                        <Cards/>
                        
                    </li>
                    
                    )
                })}

            </ul>
        )
    }
}
export default ListadeCaipas