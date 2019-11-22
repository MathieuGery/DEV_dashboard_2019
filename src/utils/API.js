import axios from "axios";
import Cookies from 'js-cookie'

const headers = {
    "content-type": "application/json"
};
const burl = "http://localhost:5000";

export default {
    login: function (email, password) {
        return axios.post(
            `${burl}/api/auth/login`, {'email': email, 'password': password},
            {
                headers: headers
            }
        )
    },

    signup: function (send) {
        console.log("SEND", send.email)
        return axios.post(`${burl}/api/auth/register`, {
            'email': send.email,
            'password': send.password
        }, {headers: {'Content-Type': 'application/json'}});
    },

    isAuth: function () {
        return Cookies.get("token") !== undefined;
    },
    logout: function () {
        Cookies.remove("token");
    },
    about: function () {
        return axios.get(`${burl}/api/about.json`, null);
    },
    weather: function (q) {
        return axios.get(`${burl}/api/services/weather/`, {headers: {'Authorization': 'Bearer ' + Cookies.get('token')}});
    },
    weather_city: function (q) {
        console.log(q)
        return axios.post(`${burl}/api/services/weather/city`, null, {
            params: {'q': q},
            headers: {'Authorization': 'Bearer ' + Cookies.get('token')}
        });
    }
};