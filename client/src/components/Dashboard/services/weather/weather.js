import React, {Component} from 'react';
import API from "../../../../utils/API";

export default class Weather extends Component {

    constructor(props) {
        super(props);
        this.send();
    }

    state = {
        data: {},
        icon: ""
    };


    send = async (e) => {
        await API.weather(this.props.city)
            .then((response) => {
                console.log(response);
                this.setState({
                    data: response.data,
                    icon: response.data.weather['0'].icon,
                    temp: response.data.main.temp
                })
            })
            .catch((error) => {
                console.error(error);
            })
    };

    render() {
        return (
            <div className={""}>
                <div className={"flex justify-between"}>
                <span className={"text-2xl underline py-5"}>Weather</span>
                    <button onClick={(e) => this.edit(e)}
                            className="text-xl">
                        Settings
                    </button>
                </div>
                <div className={"underline uppercase  tracking-wider p-8 "}>{(this.state.data.name)}</div>
                <img className={"md:mx-auto rounded shadow-lg bg-blue-300 m-8"} src={'http://openweathermap.org/img/wn/' + this.state.icon + '@2x.png'} />
                <div className={"bg-white rounded shadow-lg p-8 bg-blue-500"}>
                    <span className={"md:mx-auto text-white md:max-w-sm"}>{this.state.temp}</span>
                </div>
            </div>
        );
    }
}
