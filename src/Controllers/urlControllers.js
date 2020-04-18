import axios from 'axios';

export const urlService = (payload) => {
  
    return axios.post("http://localhost:3002/short/", payload , {
        headers: {
            "Content-Type": "application/json"
        }
    })


}