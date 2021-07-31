import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import home from './home';
import login from './login';
import signup from './signup';
import profile from './profile';
import addtask from './addtask'
class App extends Component{
  
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/signup" component={signup}/>
          <Route exact path="/login" component={login}/>
          <Route exact path="/profile" component={profile} />
          <Route exact path="/addtask" component={addtask} />
        </Switch>
      </Router>
    )
  }
}
export default App;