import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

class App extends Component{
  state = {
    login: 0,
    signup: 0
  }
  handlelogin = () => {
    this.setState({ login: 1, signup: 0 }); 
  }
  handlesignup = () => {
    this.setState({ login: 0, signup: 1 })
  }
  renderForm() {
    if (this.state.login === 1 && this.state.signup === 0) 
    return (
    <div>
      <h2 className="display-2 text-center m-2">Log In</h2>
      <form className="m-2">
        <div className="row justify-content-center m-2">
          <label for="inputEmail3" className="col-sm-1 col-form-label">Email</label>
          <div className="col-sm-4 text-center m-2">
            <input type="email" className="form-control" id="inputEmail3" name="email"></input>
          </div>
        </div>
        
        <div className="row justify-content-center m-2">
          <label for="inputPassword3" class="col-sm-1 col-form-label">Password</label>
          <div className="col-sm-4 text-center m-2">
          <input type="password" class="form-control" id="inputPassword3" name="password"></input>
          </div>
        </div>

        <div class="col-md-12 text-center">
          <button type="submit" class="btn btn-primary m-2">Log In</button>
        </div>
      </form> 
    </div>);

    else if (this.state.login === 0 && this.state.signup === 1)
      return(<div>
        <h2 class="display-2 text-center m-2">Sign Up</h2>
        <form class="row justify-content-center g-3 m-2" action="{{url_for('joinin.signUp')}}" method="POST">
          <div class="col-6" m-2>
            <input type="text" name="name" class="form-control" placeholder="Full name" aria-label="Full name"></input>
          </div>
          <div class="row justify-content-center g-3">
            <div class="col-3">
            <input type="text" name="email" class="form-control" placeholder="Email" aria-label="Email"></input>
            </div>
            <div class="col-3">
            <input type="text" name="password" class="form-control" placeholder="Password" aria-label="Password"></input>
            </div>
          </div>
          <div class="col-md-12 text-center">
            <button type="submit" class="btn btn-primary m-2">Sign Up</button>
          </div>
        </form>
      </div>
      );
    else {
      return null;
    }
  }
  render(){
    
    return(<div className="container-fluid">
            <h1 className="display-1">To Do Task Manager</h1>
            <div id="buttons">
              <button type="button" className="btn btn-primary btn-lg m-2" onClick={this.handlelogin}>Log In</button>
              <button type="button" className="btn btn-outline-dark btn-lg m-2" onClick={this.handlesignup}>Sign Up</button>
            </div>
            <div>
              { this.renderForm() }
            </div>
          </div>);
  }
}

export default App;
