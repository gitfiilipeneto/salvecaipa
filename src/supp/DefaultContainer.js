import styled from 'styled-components'

const Container = styled.div`
width:100vw;
max-width:100%;
height:100vh;
maxHeight:100%;
margin: unset;

display: flex;
justify-content: center;
align-items: center;

flex-direction: ${props => props.verticalAlign ? "row" : "column"};
background:${props => props.primary ? "Black" : "white"};

`
//colocar regras de responsividade
export default Container