import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=25&inc=name,email,dob,phone,picture";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getEmployeeDatabase: function () {
    var api = axios.get(BASEURL);
    console.log(api);
    return api;
  }
};
