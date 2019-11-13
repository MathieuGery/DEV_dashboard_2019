import axios from "axios";
import Cookies from 'js-cookie'

const headers = {
    "Content-Type": "application/json"
};
const burl = "http://localhost:8800";

export default {
    login: function (email, password) {
        return axios.post(
            `${burl}/user/login`, null,
            {
                params: {
                    email,
                    password
                }
            },
            {
                headers: headers
            }
        )
    },
    signup: function (send) {
        return axios.post(`${burl}/user/signup`, send, {headers: headers});
    },

    isAuth: function () {
        return Cookies.get("token") !== undefined;
    },
    logout: function () {
        Cookies.remove("token");
    },
    about: function () {
        return axios.get(`${burl}/api/about.json`, null);
    }
};