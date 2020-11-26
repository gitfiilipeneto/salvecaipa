import react from "react"
import styled from 'styled-components'

const Container = styled.div({
    width:"100vw",
    maxWidth:"100%",
    height:"100vh",
    maxHeight:"100%",
    margin: "null",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

})



const Home = () => {
    return(
        <Container>
            <p> Home </p>
        </Container>
    )
}

export default Home