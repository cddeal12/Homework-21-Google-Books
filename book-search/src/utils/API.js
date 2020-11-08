import axios from "axios";

const API = {
    searchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then( function(response) {
            console.log(response);
            return(response);
        })
        .catch(function(error) {
            console.log(error);
        }).then(console.log("Ran Search.."));
    }
};

export default API;