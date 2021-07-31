import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import 'react-time-picker/dist/TimePicker.css'
class addTask extends Component{
    state = {
        current_date: '',
        task: '',
        task_date: new Date(),
        task_time: '',
        description: '',
        email: '',
        return: ''
    };
    componentWillMount(){
        var today = new Date();
        var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getFullYear()
        this.setState({current_date:date})

        var url_string = window.location
        var url = new URL(url_string);
        let x = url.searchParams.get("email");
        this.setState({email: x})
    }
    handleSubmit = (event) => {
        console.log("making request")
        fetch("/addtask", {
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
    handleTask = (event) => {
        this.setState({
            task: event.target.value
        })
    }
    handleDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleDate = (date) => {
        this.setState({
            task_date: date
        })
    }
    handleTime = (time) => {
        this.setState({
            task_time: time
        })
    }
    render(){
        let ret = this.state.return;
        if (ret === true){
          return window.location.href=`/profile?email=${this.state.email}`;
        }
        else{
            return(
                <div className="text-center">
                    <h2 className="display-3 m-2">Schedule Task</h2>
                    <form className="row justify-content-center g-3 m-2 grid" onSubmit={this.handleSubmit}>
                        <div className="row justify-content-center">
                            <div className="col g-3 col-sm-5 m-2">
                            <input type="text" name="task" className="col form-control" placeholder="Task" aria-label="Task" onChange={this.handleTask} value={this.state.task}></input>
                            </div>
                        </div>
                        <div className="row justify-content-center g-3 col-sm-4 m-2">
                            <DatePicker className="col m-2" placeholder="Choose a date" selected={this.state.task_date} 
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy" onChange={this.handleDate}></DatePicker>
                            <TimePicker className="col m-2" placeholder="Choose a time"
                            format="HH:mm:ss" onChange={this.handleTime}>

                            </TimePicker>
                        </div>
                        <div>
                            <textarea className="col-sm-6 m-2" width="150px" id="description" rows="6" value={this.state.description} onChange={this.handleDescription}>
                            </textarea>
                        </div>
                        <button type="submit" className="col-sm-1 btn btn-primary m-2" >Add Task</button>
                    </form>
                </div>
            )
        }
    }
}

export default addTask