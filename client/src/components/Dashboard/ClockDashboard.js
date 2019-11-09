import React, { Component } from 'react';
import Clock from 'react-clock';

export default class ClockDashboard extends Component {
    state = {
        date: new Date(),
    }
    componentDidMount() {
        setInterval(
            () => this.setState({date: new Date()}),
            1000
        );
    }
    render() {
        return (
            <div>
                <p>Current time:</p>
                <Clock
                    value={this.state.date}
                />
            </div>
        );
    }
}