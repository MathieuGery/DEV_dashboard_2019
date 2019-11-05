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
                    <img src='data:image/png;base64,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' alt='Logo'/>
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