import httpclient from "../commons/httpclient"

const getEmployees = () => {
    return httpclient.get('/employees')
}

const postEmployee = (data) => {
    return httpclient.post('/employees', data)
}

const putEmployee = (data) =>{
    return httpclient.put('/employees', data)
}

const getEmployee = (employee_id) =>{
    return httpclient.get(`/employees/${employee_id}`)
}

const deleteEmployee = (employee_id) =>{
    return httpclient.delete(`/employees/${employee_id}`)
}
export default {getEmployees, postEmployee, putEmployee, getEmployee, deleteEmployee};