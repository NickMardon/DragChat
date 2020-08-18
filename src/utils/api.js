const axios = require("axios")

const API = {
    //User Related API calls
    saveUser: function(userData) {
        return axios.post("https://localhost:8080/api/users", userData)
    }


    
    //Hall Related API calls



    //Room Related API calls


}

export default API