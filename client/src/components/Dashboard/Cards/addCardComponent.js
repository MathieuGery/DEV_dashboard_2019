import React, {Component} from 'react';

export default class addCardComponent extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className={""}>
                <button onClick={this.props.action}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Add
                </button>
            </div>
        );
    }
}
