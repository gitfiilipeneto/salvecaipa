import React, { Component } from "react";
import styled from "styled-components";
import { SABORES, ESPECIARIAS } from "../supp/CardsAssets";

const Cardzin = styled.div`
  border: solid 1px black;
  border-radius: 30px;
  margin: 5px;
  padding: 5px;
  height: auto;
  width: auto;
`;

const StyledButton = styled.button`
  background: white;
  border: 1px solid red;
  margin: 2px;
`;

const StyledTable = styled.table`

width:100%;   
border: 1px solid black;
border-collapse: collapse;
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
`;

const Styledh1 = styled.h1``;

class Cards extends Component {
  render() {
    return (
      <Cardzin>
        <div>
          <img src={this.props.imagem}></img>

          
            <div class="dropdown">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle dropdown-toggle-split"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Qual Caipa?
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                <p class="dropdown-item">
                  600ml
                </p>
                <p class="dropdown-item">
                  1L
                </p>
              </div>
            </div>
          
          <div>
            <StyledTable>
              <tr>
                <th>Sabor</th>
                <th>teste</th>
              </tr>

              <tr>
                <td>
                  {SABORES.map((sabor, index) => (
                    <li key={index}>{sabor}</li>
                  ))}
                </td>

                <div>
                  <td>
                    {SABORES.map((sabor, index) => (
                      <li key={index}>
                        <StyledButton>-</StyledButton>
                        <StyledButton>+</StyledButton>
                      </li>
                    ))}
                  </td>
                </div>
              </tr>
            </StyledTable>
          </div>

          <div>
            <StyledTable>
              <tr>
                <th>Especiaria</th>
                <th>Teste</th>
              </tr>

              <tr>
                <td>
                  {ESPECIARIAS.map((especiaria, index) => (
                    <li key={index}>{especiaria}</li>
                  ))}
                </td>

                <div>
                  <td>
                    {ESPECIARIAS.map((especiaria, index) => (
                      <li key={index}>
                        <StyledButton>-</StyledButton>
                        <StyledButton>+</StyledButton>
                      </li>
                    ))}
                  </td>
                </div>
              </tr>
            </StyledTable>
          </div>
        </div>
      </Cardzin>
    );
  }
}

export default Cards;
