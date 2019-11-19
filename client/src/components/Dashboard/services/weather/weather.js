import React, {Component} from 'react';
import API from "../../../../utils/API";
import AddWidgetModal from '../../Modals';
import {toast} from "react-toastify";

export default class Weather extends Component {

    state = {
        data: {},
        icon: ""
    };

    constructor(props) {
        super(props);
        this.send();
    }

    change_city = async (e) => {
        console.log("eeeeeeee", e, this.props.city)
        await API.weather_city(e)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
        this.send();
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
                toast.error("City doesn't exist!");
            })
    };

    render() {
        return (
            <div className="max-w-2xl rounded overflow-hidden shadow-lg p-8">
                <div className={"flex justify-between p-8 bg-blue-400"}>
                    <span className={"text-2xl underline py-5"}>Weather</span>
                    <AddWidgetModal data={this.props.city} fnct={this.change_city}/>
                </div>
                <div className={"underline uppercase  tracking-wider p-8 "}>{(this.state.data.name)}</div>
                <img className={"md:mx-auto rounded shadow-lg bg-blue-300 m-8"}
                     src={'http://openweathermap.org/img/wn/' + this.state.icon + '@2x.png'} alt=""/>
                <div className={"bg-white rounded shadow-lg p-8 bg-blue-500"}>
                    <span className={"md:mx-auto text-white md:max-w-sm"}>{this.state.temp}</span>
                </div>
            </div>
        );
    }
}
