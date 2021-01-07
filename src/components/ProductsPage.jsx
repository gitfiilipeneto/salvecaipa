import React from 'react'
import styled from 'styled-components'
import Container from '../supp/DefaultContainer'
import Cards from './ProductsCards'


const ProductsPage = () =>{
    return(
        <Container>
            <Cards title={"Caipa 600"} imagem = {"imagem"} description = {"descrição caipa 600"}></Cards>
        </Container>
    )
}

export default ProductsPage