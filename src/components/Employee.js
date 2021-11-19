import {useEffect, useState} from 'react'
import employeeService from '../services/employeeService'
import './Employee.css';

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
            <table border="1">
                <tr>
                <td><b>Name</b></td>
                    <td><b>Department</b></td>
                    <td><b>Location</b></td>
                </tr>
                {
                    employees.map(
                        employee => (
                            <tr>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                            </tr>
                        )
                    )
                }
            </table>
        </div>
    )
}

export default Employee;