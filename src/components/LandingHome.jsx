import React from "react"
import styled from 'styled-components'
import Button from './BuyButton'
import logo from '../images/logosalve.png'
import Container from '../supp/DefaultContainer'



const StyledImage = styled.img`
    
    margin: 45px;
    width:450px;
    height: auto;
    
    @media(max-width: 780px){
        width:280px;
    }
   
`


const Home = () => {
    return(
        <Container primary>
            <StyledImage src = {logo}/>
            <div>
                <Button/>
            </div>
        </Container>
    )
}

export default Home