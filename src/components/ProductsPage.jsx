import React, { Component } from 'react'
import Container from '../supp/DefaultContainer'
import Cards from './ProductsCards'
// import AddMore from './renderCardsButton'

class ProductsPage extends Component{

    render(){
        return(
            <Container>
                <Cards/>
            </Container>
        )
    }
}

export default ProductsPage