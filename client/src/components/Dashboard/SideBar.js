import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChartLine, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import API from "../../utils/API";

import CreateWidgetModal from "./Modals";

class SideBar extends React.Component {
    disconnect = () => {
        API.logout();
        window.location = "/";
    };

    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-indigo-900 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <FontAwesomeIcon icon={faChartLine} className={"text-6xl"}/>
                    <span
                        className="font-semibold text-3xl tracking-tight p-4 tracking-widest uppercase">Dashboard</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <CreateWidgetModal/>
                    </div>
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <div className="p-4">
                            <FontAwesomeIcon icon={faUserCircle} className={"text-5xl text-white"}/></div>
                        <button
                            className="inline-block text-3xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                            onClick={this.disconnect}>Sign Out
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SideBar;
