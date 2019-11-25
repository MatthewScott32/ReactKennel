import EmployeeManager from "./EmployeeManager"

const deleteEmployee = id => {
    EmployeeManager.delete(id)
    .then(() => {
      EmployeeManager.getAll()
      .then((newEmployees) => {
        this.setState({
            employees: newEmployees
        })
      })
    })
  }

  export default deleteEmployee