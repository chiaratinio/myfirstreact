import {useEffect, useState} from 'react'
import employeeService from '../services/employeeService'
import { Link } from "react-router-dom"
import logo1 from '../logo1.gif';

const Employee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        refreshEmployeeTable();
    })
    
    const refreshEmployeeTable = () => (
        employeeService.getEmployees() // promise
            .then(
                response => {
                    setEmployees(response.data)
                }
            )
            .catch(
                () => {
                    console.log('sorry po lods :p')
                }
            )
    )
    
    const deleteEmployee = (employee_id) => {
        employeeService.deleteEmployee(employee_id)
                .then(
                    console.log('Yay! Succesfully deleted an employee!')
                )
                .catch(
                    error =>{
                            console.error("Oh no! Something went wrong!", error)
                        }
                )
        
    }
    
    return (
        <div id="employee">
        <header className="App-header">
            <img src={logo1} className="App-logo" alt="logo"/>
            <h2>🐼 List of Employees 🐼</h2>
                <div className="container">
                    <table className="table table-hover table-light table-bordered border-dark">
                        <thead>
                            <tr className="table-warning">
                                <td><b>Name</b></td>
                                <td><b>Department</b></td>
                                <td><b>Location</b></td>
                                <td><b>Action</b></td>
                            </tr>
                        </thead>
                
                        <tbody>
                        {
                            employees.map(
                                employee => (
                                    <tr key={employee.employee_id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.location}</td>
                                        <td>
                                            <div className="d-grid gap-2 d-md-flex">
                                                <Link className= "btn btn-primary" to={`/myfirstreact/edit/${employee.employee_id}`}>Update</Link>
                                                <button className= "btn btn-danger" onClick={()=> deleteEmployee(employee.employee_id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                </table>
            </div>
            </header>
            </div>
    )
}
export default Employee;