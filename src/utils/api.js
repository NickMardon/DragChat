const axios = require("axios")
const urlPrefix = "http://localhost:8080"
// const urlPrefix = "https://dropinapisamine.herokuapp.com"
const API = {


    //User Related API calls
    saveUser: function(userData) {
        return axios.post(`${urlPrefix}/api/users/signup`, userData)
    },

    userLogin: function(userData) {
        return axios.post(`${urlPrefix}/api/users/login`, userData, { withCredentials: true })
    },

    logout:function () {
        return axios.get(`${urlPrefix}/api/users/logout`, { withCredentials: true })
    },

    getCurrentUser: function () {
        return axios.get(`${urlPrefix}/api/users/readsessions`, { withCredentials: true })
    },
    //TODO: testing
    getCurrentUserInfo: function (id) {
        return axios.get(`${urlPrefix}/api/users/${id}/info`, { withCredentials: true })
    },


// ------------------------------------------
    //Hall Related API calls
    createHall: function(hallData) {
        return axios.post(`${urlPrefix}/api/halls/create`, hallData, { withCredentials: true })
    },

    //all the halls that belong to the currently logged in user
    getAllUserHalls: function() {
        return axios.get(`${urlPrefix}/api/halls/allhalls`, { withCredentials: true })
    },
    //get a single hall by id
    getHallById: function(id) {
        return axios.get(`${urlPrefix}/api/halls/${id}`)
    },

    // delete a single hall by id
    deleteHallById: function(id) {
        return axios.delete(`${urlPrefix}/api/halls/delete/${id}`)
    }
// ------------------------------------------
    //Room Related API calls


}

export default API