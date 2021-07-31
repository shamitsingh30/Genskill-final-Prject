import React, {Component} from 'react';

class logIn extends Component{
  state = {
    email: '',
    password: '',
    return: ''
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handlePassChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleSubmit = (event) => {
    console.log("making request")
    fetch("/login", {
        method:"POST",
        headers:{
          "content_type":"application/json",
        },
        body:JSON.stringify(this.state)
        }
        ).then(response => {
        return response.json()
        })
        .then(json => {
            console.log(json)
        this.setState({return: json['status']})
    })
  event.preventDefault()
  }  
    render(){
      let ret = this.state.return;
      if (ret === true){
        return window.location.href=`/profile?email=${this.state.email}`;
      }
      else{
        return (
            <div>
              <h2 className="display-2 text-center m-2">Log In</h2>
              <form className="m-2" onSubmit={this.handleSubmit}>
                <div className="row justify-content-center m-2">
                  <label for="inputEmail3" className="col-sm-1 col-form-label">Email</label>
                  <div className="col-sm-4 text-center m-2">
                    <input type="email" className="form-control" id="inputEmail3" name="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                  </div>
                </div>
                
                <div className="row justify-content-center m-2">
                  <label for="inputPassword3" className="col-sm-1 col-form-label">Password</label>
                  <div className="col-sm-4 text-center m-2">
                  <input type="password" className="form-control" id="inputPassword3" name="password" value={this.state.password} onChange={this.handlePassChange}></input>
                  </div>
                </div>
        
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-primary m-2">Log In</button>
                </div>
              </form> 
            </div>);
      }
    }
}

export default logIn;