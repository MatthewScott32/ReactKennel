import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        title: "",
        loadingStatus: false,
    };

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    constructNewEmployee = event => {
        event.preventDefault();
        if (this.state.employeeName === "" || this.state.title === "") {
            window.alert("Please input an employee name and title");
        } else {
            this.setState({ loadingStatus: true});
            const employee = {
                name: this.state.employeeName,
                title: this.state.title,
            };

            EmployeeManager.post(employee)
            .then(() => this.props.history.push("/employees"));
        }
    };

    render () {

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="employeeName"
                        placeholder="Employee Name"
                        />
                        <label htmlFor="employeeName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Title"
                        />
                        <label htmlFor="employeeTitle">Title</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
  }
}

export default EmployeeForm