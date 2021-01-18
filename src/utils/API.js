import axios from "axios";
const BASEURL = "https://randomuser.me/api/?inc=name,email,dob,phone,picture?results=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getEmployeeDatabase: function() {
    var showthis = axios.get(BASEURL);
    console.log(showthis)
    return showthis
  }
};
