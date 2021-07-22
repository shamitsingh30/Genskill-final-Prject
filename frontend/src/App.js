import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    count:0
  };
  handleClick(){
    const {count} = this.state;
    count = count+1;
    return(count);
  }
  render(){
    return(<div>
           <button type="button" className="btn btn-primary btn-lg m-2" onClick={this.handleClick}>Log In</button>
           <button type="button" className="btn btn-outline-dark btn-lg m-2" onClick={this.handleClick()}>Sign Up</button>
           <span>{this.state.count}</span>
           </div>);
  }
}

export default App;
