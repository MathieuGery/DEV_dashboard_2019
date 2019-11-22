import React, {Component} from 'react';
import API from "../../../../utils/API";
import AddWidgetModal from '../../Modals';
import {toast} from "react-toastify";
import {faThermometerFull, faThermometerQuarter, faThermometerEmpty} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Weather extends Component {

    state = {
        data: {},
        icon: "",
        min_temp: '0',
        max_temp: '0',
        intervalID: 0,
        refresh_rate: '6'
    };
    constructor(props) {
        super(props);
        this.send();
    }

    componentDidMount() {
        this.intervalID = setInterval(e => this.send(), this.state.refresh_rate * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    change_refresh = (e) => {
        this.state.refresh_rate = e;
        clearInterval(this.intervalID);
        this.intervalID = setInterval(e => this.send(), this.state.refresh_rate * 1000);
    };

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
        console.log("SEEEEEENNNNNNNDDDDD", this.state.refresh_rate);
        await API.weather(this.props.city)
            .then((response) => {
                console.log(response);
                this.setState({
                    data: response.data,
                    icon: response.data.weather['0'].icon,
                    temp: response.data.main.temp,
                    min_temp: response.data.main.temp_min,
                    max_temp: response.data.main.temp_max
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
                    <AddWidgetModal data={this.props.city} refresh_rate={this.change_refresh} fnct={this.change_city}/>
                </div>
                <div className={"ont-semibold text-3xl tracking-tight p-4 tracking-widest uppercase "}>{(this.state.data.name)}</div>
                <img className={"md:mx-auto rounded shadow-lg bg-blue-300 m-8"}
                     src={'http://openweathermap.org/img/wn/' + this.state.icon + '@2x.png'} alt=""/>
                <div className={"bg-white rounded shadow-lg p-8 bg-blue-500 flex center"}>
                    <FontAwesomeIcon icon={faThermometerEmpty} className={"text-6xl text-white"}/>
                    <span className={"md:mx-auto text-white md:max-w-sm px-8 text-3xl"}>{this.state.min_temp} °C</span>
                    <FontAwesomeIcon icon={faThermometerQuarter} className={"text-6xl text-white"}/>
                    <span className={"md:mx-auto text-white md:max-w-sm px-8 text-3xl"}>{this.state.temp} °C</span>
                    <FontAwesomeIcon icon={faThermometerFull} className={"text-6xl text-white"}/>
                    <span className={"md:mx-auto text-white md:max-w-sm px-8 text-3xl"}>{this.state.max_temp} °C</span>
                </div>
            </div>
        );
    }
}
