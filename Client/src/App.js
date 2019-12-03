import React, {Component} from 'react';
import FormCardList from './components/FormCardList.js';
import './App.css';

class App extends Component{

  constructor(){
    super()
    this.state={
      cards: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:8081/getforms")
      .then(response=> response.json())
      .then(forms => {this.setState({ cards: forms})})
      .then(console.log(this.state.cards));
  }

  getForms=()=>{
    fetch("http://localhost:8081/getforms")
      .then(response=> response.json())
      .then(forms => {this.setState({ cards: forms})})
      .then(console.log(this.state.cards));
  }

  render(){
    return(
      <div className="App">
        <FormCardList cardlist={this.state.cards} getForms={this.getForms.bind(this)}/>
      </div>
    )
    
  }
}

export default App;
