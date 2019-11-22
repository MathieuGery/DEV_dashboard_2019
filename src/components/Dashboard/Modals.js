import React, {Component} from 'react';
import Modal from 'react-awesome-modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";

export default class AddWidgetModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: '',
            refresh: '0'
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        console.log(this.state.data);
        this.props.fnct(this.state.data);
        this.props.refresh_rate(this.state.refresh);
        this.setState({
            visible: false
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        return (
            <section>
                <FontAwesomeIcon icon={faCog} className={"text-2xl cursor-pointer"} onClick={() => this.openModal()}/>
                <Modal
                    visible={this.state.visible}
                    width="300"
                    height="250"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <form className={'md:flex md:flex-wrap'}>
                        <div>
                            <div className="mb-4 p-8">
                                <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="username">
                                    City name:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="data" type="text" placeholder="City" defaultValue={this.props.data}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="mb-4 px-8">
                                <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="username">
                                    Refresh rate:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="refresh" type="text" placeholder="Time" defaultValue={this.props.refresh_rate}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="mb-4 px-8 flex center">
                                <button onClick={() => this.closeModal()}
                                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-2xl"
                                        type={"button"}>
                                    Apply
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </section>
        );
    }
}