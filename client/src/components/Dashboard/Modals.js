import React, {Component} from 'react';
import Modal from 'react-awesome-modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

export default class AddWidgetModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <section>
                <button onClick={() => this.openModal()}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded text-2xl"
                        type="button" value="Open">
                    Add widget
                    <a className={"px-3"}>
                        <FontAwesomeIcon icon={faPlusCircle} className={"text-3xl text-white"}/></a>
                </button>
                <Modal
                    visible={this.state.visible}
                    width="800"
                    height="600"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Title</h1>
                        <p>Some Contents</p>
                        <button onClick={() => this.closeModal()}
                                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-2xl"
                                type={"button"}>
                            Add Widget
                        </button>
                    </div>
                </Modal>
            </section>
        );
    }
}