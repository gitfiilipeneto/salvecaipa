import React from 'react'
import styled from 'styled-components'
import Container from '../supp/DefaultContainer'
import Cards from './ProductsCards'
import AddMore from './renderCardsButton'


const ProductsPage = () =>{
    return(
        <Container verticalAlign>
 
            <Cards/>

            <div>
                <AddMore/>
            </div>
        </Container>
    )
}

export default ProductsPage