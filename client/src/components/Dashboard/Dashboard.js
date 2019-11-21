import React from "react";
import API from "../../utils/API";
import SideBar from "./SideBar";
import TestCards from './Cards/MyCardsWidget';

export class Dashboard extends React.Component {
    disconnect = () => {
        API.logout();
        window.location = "/";
    };

    render() {
        return (
            <div>
                <SideBar/>
                <div className={"h-screen bg-indigo-100 px-8 py-8"}>
                    <TestCards/>
                </div>
            </div>
        );
    }
}