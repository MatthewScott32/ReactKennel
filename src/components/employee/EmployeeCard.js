import React, {Component} from "react";

class EmployeeCard extends Component{
    render(){
        return (
            <div className="card">
            <div className="card-content">
              <picture>
                <img src={require('./employee.jpg')} alt="My Employee" />
              </picture>
              <h3>Name: <span className="card-employee">{this.props.employee.name}</span></h3>
        <p>Title: {this.props.employee.title}</p>
              <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
            </div>
          </div>
        );
    }
}

export default EmployeeCard