import {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom";
import employeeService from "../services/employeeService";

const AddEmployee =() =>{
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const {employee_id} = useParams();
    
    useEffect(
        () =>{
            if(employee_id){
                employeeService.getEmployee(employee_id)
                .then(
                    response =>{
                        setName(response.data.name);
                        setLocation(response.data.location);
                        setDepartment(response.data.department);
                    }
                )
                .catch(
                    error =>{
                        console.error("Oh no! Error!")
                    }
                )
            }
            else{
                console.log("Sorry! employee_id does not exist")
            }
        },[]
    )
    
    const saveEmployee = (e) =>{
        e.preventDefault();
        
        if(employee_id){
            //update employee
            const employee = {employee_id, name, location, department};
            employeeService.putEmployee(employee)
                .then(
                    response =>{
                        console.log("Yay! Updated employee!", response.data)
                        navigate('/employees')
                    }
                )
                .catch(
                    error =>{
                        console.error("Oops! Something went wrong!")
                    }
                )
        }
         
        else{
            //add employee
            const employee = {name, location, department};
            employeeService.postEmployee(employee)
                .then(
                    response =>{
                        console.log("Yay! Added a new employee!", response.data)
                        navigate("/employees")
                    }
                )
                .catch(
                    error =>{
                        console.error("Oh no! Something went wrong!")
                    }
                )
        }
    }
    
    return (
        <div className="container">
            <h1>Add Employee</h1>
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        placeholder="Add employee name"
                        onChange={
                            (e) =>{
                                setName(e.target.value)
                            }
                        }
                        />
                    </div>
                    <div className="mb-3">
                        <label for="department" className="form-label">Department</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="department"
                        placeholder="Add employee department"
                        onChange={
                            (e) =>{
                                setDepartment(e.target.value)
                            }
                        }
                        />
                    </div>
                    <div className="mb-3">
                        <label for="location" className="form-label">Location</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="location"
                        placeholder="Add employee location"
                        onChange={
                            (e) =>{
                                setLocation(e.target.value)
                            }
                        }
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
                </form>
        </div>
    )
}

export default AddEmployee