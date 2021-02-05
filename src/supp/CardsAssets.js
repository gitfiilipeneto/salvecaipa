import styled from "styled-components";

const SABORES = [
    "Morango",
    "Limão",
    "Maracujá",
    "Abacaxi",
    "Vinho com Limão",
]

const ESPECIARIAS = [
    "Hortelã",
    "Gengibre",
    "Pimenta",
]

//card model

const Cardzin = styled.div`
  border: solid 1px black;
  border-radius: 30px;
  margin: 5px;
  padding: 5px;
  height: auto;
  width: auto;
`

const StyledButton = styled.button`
  background: white;
  border: 1px solid red;
  margin: 2px;
`

const StyledTable = styled.table`

width:100%;   
border: 1px solid black;
// border-collapse: collapse;
margin-top: 5px;


    &tr, th{
      border: 1px solid black;
      background:black;
      color:white;
      text-align: center;
      
    }

    &tr, td, li{
      padding: 5px;
      margin: 5px;
      height: 40px;
      text-align: left;
      list-style-type: none;
    }
    &div, td, li{
        justify-content: right;
    }
}
`

export {
    SABORES,
    ESPECIARIAS,
    Cardzin,
    StyledButton,
    StyledTable
}