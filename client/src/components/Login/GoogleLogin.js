import React, {Component} from "react";

import GoogleLogin from "react-google-login";

export default class LoginWithGoogle extends Component{
    render() {
        const responseGoogle = (response) => {
            console.log(response)
        }
        return (
            <div className={"py-8"}>
                <GoogleLogin onSuccess={responseGoogle} onFailure={responseGoogle} clientId="309004299221-7a9nsovn631cshtohvbvf0m1qhcalls3.apps.googleusercontent.com" buttonText={"Google"}/>
            </div>
        )
    }
}