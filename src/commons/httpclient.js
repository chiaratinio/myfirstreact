import axios from "axios";    

export default axios.create({
        baseURL: 'https://tinio-myfirstreact.herokuapp.com/',
        headers: {
           'Content-Type':'application/json',
           'Access-Control-Allow-Origin': '*'
        }
})
