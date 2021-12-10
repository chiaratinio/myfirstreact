import {useEffect, useState} from 'react'
import employeeService from '../services/employeeService'
import { Link } from "react-router-dom"

const Employee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
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
    })

    return (
        <div id="employee">
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
                                            <Link className= "btn btn-primary" to={`/edit/${employee.employee_id}`}>Update</Link>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                </table>
            </div>
        </div>
    )
}
export default Employee;