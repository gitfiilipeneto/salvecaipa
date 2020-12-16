import React from "react"
import styled from 'styled-components'
import Button from './BuyButton'
import logo from '../images/logosalve.png'

const Container = styled.div`
    width:100vw;
    max-width:100%;
    height:100vh;
    maxHeight:100%;
    margin: unset;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const StyledImage = styled.img`
    
    margin: 5px;
    width:450px;
    height: auto;
    
    @media(max-width: 780px){
        width:280px;
    }
   
`


const Home = () => {
    return(
        <Container>
            <StyledImage src = {logo}/>
            <Button/>
        </Container>
    )
}

export default Home