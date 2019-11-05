import React from "react";
import API from "../../utils/API";

export class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };
    send = async () => {
        const { email, password } = this.state;
        if (!email || email.length === 0) {
            return
        }
        if (!password || password.length === 0) {
            return;
        }
        try {
            const { data } = await API.login(email, password);
            localStorage.setItem("token", data.token);
            window.location = "/dashboard";
        } catch (error) {
            console.error(error);
        }
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
                        <button onClick={this.send} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Connexion
                        </button>
                        </div>
                    </form>
                    <a className="block w-full text-center no-underline text-xl text-grey-dark hover:text-grey-darker p-8"
                       href="/signup">Don't have an account? Create One</a>
                    <p className="text-center text-gray-500 text-sm">
                        &copy;Made by love by Mathieu Gery
                    </p>
                </div>
            </div>
        );
    }
}