import React from "react";
import API from "../utils/API";
import 'react-toastify/dist/ReactToastify.css';

export class About extends React.Component {
    state = {
        data: "",
    };

    constructor(props) {
        super(props);
        this.send();
    }

    send = async (e) => {
        console.log("biteeee");
        await API.about()
            .then((response) => {
                this.setState({
                    data: response.data,
                });
            })
            .catch((error) => {
                console.error(error);
            })
    };


    render() {
        return (
            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        );
    }
}