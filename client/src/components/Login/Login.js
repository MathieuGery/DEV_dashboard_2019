import React from "react";
import API from "../../utils/API";
import LoginWithGoogle from "./GoogleLogin"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'

import LogoLogin from '../../static/assets/login-logo.png';

export class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };
    send = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || email.length === 0) {
            toast.error("Email can not be empty !");
            return
        }
        if (!password || password.length === 0) {
            toast.error("Password can not be empty !");
            return;
        }
        await API.login(email, password)
                .then((response) => {
                    Cookies.set("token", response.token);
                    window.location = "/dashboard";
                })
                .catch((error) => {
                    toast(error.response.data.text);
                    console.log(error.response.data.text);
                })
    };


    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    render() {
        const { email, password } = this.state;
        return (
            <div className="flex items-center h-screen w-full bg-indigo-900 bg-teal-lighter">
                <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                    <img src={LogoLogin} alt='Logo'/>
                    <h1 className="block w-full text-center text-grey-darkest mb-6">Login</h1>
                    <form className="mb-4 md:flex md:flex-wrap md:justify-between">
                        <div className="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                   htmlFor="email">Email</label>
                            <input className="border py-2 px-3 text-grey-darkest" id='email' placeholder="your.email@example.com"
                                   autoFocus
                                   type="email"
                                   value={email}
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="flex flex-col mb-8 md:w-full">
                            <label className="mb-4 uppercase font-bold text-lg text-grey-darkest"
                                   htmlFor="password">Password</label>
                            <input className="border py-2 px-3 text-grey-darkest" id="password"  placeholder="************"
                                   value={password}
                                   onChange={this.handleChange}
                                   type="password"/>
                        </div>
                        <div className="flex flex-col mb-4 md:w-full">
                        <button onClick={(e) => this.send(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Connexion
                        </button>
                            <LoginWithGoogle/>
                        </div>
                    </form>

                    <a className="block w-full text-center no-underline text-xl text-grey-dark hover:text-grey-darker p-8"
                        href="/signup">Don't have an account? Create One</a>
                    <p className="text-center text-gray-500 text-sm">
                        &copy;Dashboard Epitech Mathieu
                    </p>
                </div>
            </div>
        );
    }
}