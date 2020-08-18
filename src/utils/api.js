const axios = require("axios")

const API = {
    //User Related API calls
    saveUser: function(userData) {
        return axios.post("http://localhost:8080/api/users/signup", userData)
    },
    // TODO: put in use on user page  
    //  getUser: function(id) {
    //     return axios.get(`http://localhost:8080/api/users/${id}`)
    // },
    userLogin: function(userData) {
        return axios.post("http://localhost:8080/api/users/login", userData)
    },
// ------------------------------------------
    //Hall Related API calls
    createHall: function(hallData) {
        return axios.post("http://localhost:8080/api/halls/create", hallData)
    }

// ------------------------------------------
    //Room Related API calls


}

export default API