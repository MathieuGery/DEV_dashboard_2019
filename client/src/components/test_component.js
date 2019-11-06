import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
    render() {
        return <h2>I am a Car! {this.props.color}</h2>;
    }
}

export default Car;