import React, {Component} from 'react';

class home extends Component{
  
    handlelogin = () => {
      this.props.history.push('/login');
    }
    handlesignup = () => {
      window.location.href='/signup';
    }
    render(){
  
      return(<div className="container-fluid">
              <h1 className="display-1">To Do Task Manager</h1>
              <div id="buttons">
                <button type="button" className="btn btn-primary btn-lg m-2" onClick={this.handlelogin}>Log In</button>
                <button type="button" className="btn btn-outline-dark btn-lg m-2" onClick={this.handlesignup}>Sign Up</button>
              </div>
            </div>);
    }
  }
  
  export default home;