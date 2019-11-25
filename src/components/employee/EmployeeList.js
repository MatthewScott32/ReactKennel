import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'
import deleteEmployee from '../../modules/Helpers'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    EmployeeManager.getAll()
    .then((employeesArray) => {
        this.setState({
            employees: employeesArray
        })
    })
}

  render(){
    console.log("EmployeeList: Render");
  
    return(
     <React.Fragment>
         <section className="section-content">
             <button type="button" className="btn" onClick={() => {this.props.history.push("/employee/new")}}>Hire</button>    
         </section>
            <div className="container-cards">
                {this.state.employees.map(employee =>
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    deleteEmployee={deleteEmployee}
                    {...this.props}
                />
                )}
            </div>
        </React.Fragment>
    )
  }
}

export default EmployeeList