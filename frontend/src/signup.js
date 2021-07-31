import React, {Component} from 'react';

class signUp extends Component{
    state = {
        name: '',
        email: '',
        password: '',
        return: ''
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
      }
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
        fetch("/signup", {
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
      if (ret === "Done"){
        return window.location.href='/login';
      }
      else{
        return(<div>
            <h2 className="display-2 text-center m-2">Sign Up</h2>
            <form className="row justify-content-center g-3 m-2" onSubmit={this.handleSubmit}>
              <div className="col-6" m-2>
                <input type="text" name="name" className="form-control" placeholder="Full name" aria-label="Full name" value={this.state.name} onChange={this.handleNameChange}></input>
              </div>
              <div className="row justify-content-center g-3">
                <div className="col-3">
                <input type="text" name="email" className="form-control" placeholder="Email" aria-label="Email" value={this.state.email} onChange={this.handleEmailChange}></input>
                </div>
                <div className="col-3">
                <input type="text" name="password" className="form-control" placeholder="Password" aria-label="Password" value={this.state.password} onChange={this.handlePassChange}></input>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary m-2">Sign Up</button>
              </div>
            </form>
          </div>
          );
      }
    }
}
export default signUp;