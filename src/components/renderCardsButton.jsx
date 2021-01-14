import {React, Component} from 'react'
import Cards from './ProductsCards'

class AddMore extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }
  
    _onButtonClick() {
      this.setState({
        showComponent: true,
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this._onButtonClick}>Mais uma</button>
          {this.state.showComponent ?
             <Cards /> : null
          }
        </div>
      );
    }
  }

export default AddMore