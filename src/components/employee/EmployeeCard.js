import React, {Component} from "react";

class EmployeeCard extends Component{
    render(){
        return (
            <div className="card">
            <div className="card-content">
              <picture>
                <img src={require('./employee.jpg')} alt="My Employee" />
              </picture>
              <h3>Name: <span className="card-employeename"></span>Luke Jackson</h3>
              <p>Title: Stock-Boy</p>
            </div>
          </div>
        );
    }
}

export default EmployeeCard