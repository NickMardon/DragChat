const axios = require("axios")
// const urlPrefix = "http://localhost:8080"
const urlPrefix = "https://dropinsamine.herokuapp.com"
const API = {
    //User Related API calls
    saveUser: function(userData) {
        return axios.post("${urlPrefix}/api/users/signup", userData)
    },
    // TODO: put in use on user page  
    //  getUser: function(id) {
    //     return axios.get(`${urlPrefix}/api/users/${id}`)
    // },
    userLogin: function(userData) {
        return axios.post("${urlPrefix}/api/users/login", userData)
    },
// ------------------------------------------
    //Hall Related API calls
    createHall: function(hallData) {
        return axios.post("${urlPrefix}/api/halls/create", hallData, { withCredentials: true })
    },

    //all the halls that belong to the currently logged in user
    getAllUserHalls: function(id) {
        return axios.get(`${urlPrefix}/api/halls/${id}/rooms`, { withCredentials: true })
    }
// ------------------------------------------
    //Room Related API calls


}

export default API