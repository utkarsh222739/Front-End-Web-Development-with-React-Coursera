import React, {Component} from 'react';
import './App.css';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main dishes={this.state.dishes} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
