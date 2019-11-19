import React, {Component} from 'react';
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
            <div className="max-w-2xl rounded overflow-hidden shadow-lg p-8">
                <p className={"text-2xl underline py-5 flex m-auto"}>Current time:</p>
                <Clock className={"m-auto flex"}
                       value={this.state.date}
                />
            </div>
        );
    }
}