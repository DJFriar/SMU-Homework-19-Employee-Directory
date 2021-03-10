import axios from 'axios';

const APIURL = "https://randomuser.me/api/?results=20&nat=us&inc=picture,name,email,phone,dob&noinfo";

export default {
    fetchEmployees: function () {
        return axios.get(APIURL);
    }
}