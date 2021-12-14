import axios from "axios";    

export default axios.create({
        baseURL: 'https://tinio-myfirstreact.herokuapp.com/api/v1/employees',
        headers: {
            'Content-Type': 'application/json'
        }
})
