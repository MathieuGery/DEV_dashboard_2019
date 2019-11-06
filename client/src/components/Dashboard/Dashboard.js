import React from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/API";
import SideBar from "./SideBar";

export class Dashboard extends React.Component {
    disconnect = () => {
        API.logout();
        window.location = "/";
    };
    render() {
        return (<SideBar/>
        );
    }
}