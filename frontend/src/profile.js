import React, {Component} from 'react'

class profile extends Component{
    state = {
        email: '',
        data: ''
    }
    componentWillMount(){
        var url_string = window.location
        var url = new URL(url_string);
        let x = url.searchParams.get("email");
        this.setState({email: x})
    }
    
    handleShowtask = () => {
        console.log("making request")
        fetch("/mytasks", {
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
        this.setState({data: json['tasks']})
        })
    }
    handleLogout = () => {
        window.location.href = '/';
    }
    
    handleList(){
        
        var data = this.state.data;
        if(data){
            return(
                <table className="table m-5">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Task</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        {data.map(function(item) {
                            return (<div>
                                <th scope="row" key={item.id}>{item.id}</th>
                        
                            </div>
                        )})}
                        </td>
                        <td>
                        {data.map(function(item) {
                            return (<div>
                                <th key={item.id}>{item.task}</th>
                        
                            </div>
                        )})}
                        </td>
                        <td>
                        {data.map(function(item) {
                            return (<div>
                                <th key={item.id}>{item.t_date}</th>
                        
                            </div>
                        )})}
                        </td>
                        <td>
                        {data.map(function(item) {
                            return (<div>
                                <th key={item.id}>{item.t_time}</th>
                        
                            </div>
                        )})}
                        </td>
                        <td>{data.map(function(item) {
                            return (<div>
                                <th key={item.id}>{item.description}</th>
                        
                            </div>
                        )})}
                        </td>
                        
                        </tr>
                    </tbody>
                    </table>
            )
            
        }
    }
    handleTask = (event) => {
        this.setState({
            task: event.target.value
        })
    }
    handleAddtask = () => {
        window.location.href = `/addtask?email=${this.state.email}`;
    }
    
    render(){
        
        return (<div className="container-fluid">
                    <h1 className="display-1 m-2">My Tasks</h1>
                    <h1 className="display-5 m-2"> ({this.state.email})</h1>
                    <div className="m-2" id="buttons">
                        <button type="button" className="btn btn-warning btn-lg m-2" onClick={this.handleAddtask}>Add Task</button>
                        <button type="button" className="btn btn-primary btn-lg m-2" onClick={this.handleShowtask}>Show Tasks</button>
                        <button type="button" className="btn btn-dark btn-lg m-2" onClick={this.handleLogout}>Logout</button>
                    </div>
                    <div>{this.handleList()}</div>

                </div>)
    }
}
export default profile;