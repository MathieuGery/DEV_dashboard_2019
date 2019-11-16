import React from "react";
import API from "../../utils/API";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'

import SignupLogo from '../../static/assets/signup-logo.png';

export class Signup extends React.Component {
    state = {
        email: "",
        password: "",
        cpassword: ""
    };
    send = async (e) => {
        e.preventDefault();
        const {email, password, cpassword} = this.state;
        if (!email || email.length === 0) {
            toast.error("Empty mail !");
            return;
        }
        if (!password || password.length === 0 || password !== cpassword) {
            toast.error("Empty password or different!");
            return;
        }
        await API.signup({email, password})
            .then((response) => {
                Cookies.set("token", response.token);
                window.location = "/";
                toast("Sucess !");
            })
            .catch((error) => {
                toast.error(error.response.data.text);
                console.log(error.response);
            });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        const {email, password, cpassword} = this.state;
        return (
            <div className="flex items-center h-screen w-full bg-teal-lighter" style={{background: 'linear-gradient(to right, #6441a5, #2a0845)'}}>
                <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                    <img src={SignupLogo} alt='Logo'/>
                    <h1 className="block w-full text-center text-grey-darkest mb-6">Sign up</h1>
                    <form className="mb-4 md:flex md:flex-wrap md:justify-between">
                        <div className="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                   htmlFor="email">Email</label>
                            <input className="border py-2 px-3 text-grey-darkest" id='email'
                                   placeholder="your.email@example.com"
                                   autoFocus
                                   type="email"
                                   value={email}
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="flex flex-col mb-8 md:w-full">
                            <label className="mb-4 uppercase font-bold text-lg text-grey-darkest"
                                   htmlFor="password">Password</label>
                            <input className="border py-2 px-3 text-grey-darkest" id="password"
                                   placeholder="************"
                                   value={password}
                                   onChange={this.handleChange}
                                   type="password"/>
                        </div>
                        <div className="flex flex-col mb-8 md:w-full">
                            <label className="mb-4 uppercase font-bold text-lg text-grey-darkest"
                                   htmlFor="password">Confirm Password</label>
                            <input className="border py-2 px-3 text-grey-darkest" id="cpassword"
                                   placeholder="************"
                                   value={cpassword}
                                   onChange={this.handleChange}
                                   type="password"/>
                        </div>
                        <div className="flex flex-col mb-4 md:w-full">
                            <button onClick={this.send}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    type="submit">
                                Create account
                            </button>

                        </div>
                    </form>
                    <a className="block w-full text-center no-underline text-xl text-grey-dark hover:text-grey-darker p-8"
                       href="/">Already have an account? Login</a>
                    <p className="text-center text-gray-500 text-sm">
                        &copy;Dashboard Epitech Mathieu
                    </p>
                </div>
            </div>
        );
    }
}