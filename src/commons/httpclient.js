import axios from "axios";    

export default axios.create({
        baseURL: 'https://tinio-myfirstreact.herokuapp.com/api/v1/',
        headers: {
           'Content-Type':'application/json',
           'Access-Control-Allow-Origin': '*'
        }
})
