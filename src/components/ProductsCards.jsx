import React, { Component } from "react";
import { SABORES, ESPECIARIAS, Cardzin, StyledButton, StyledTable } from "../supp/CardsAssets";


class Cards extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      quantidade: 0
    };
  }
  

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
                      <li key={index} >
                        <StyledButton>-</StyledButton>
                        {this.state.quantidade}
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
