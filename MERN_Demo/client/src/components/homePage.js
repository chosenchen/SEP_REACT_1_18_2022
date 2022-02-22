import React from "react";

import { API } from '../services/connectToDB';
import { USER_API } from "../services/user.connectToDB";

import LogCard from "./LogCard";

import './styles/homePage.css';
import "bootstrap-icons/font/bootstrap-icons.css";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { records: [] };
    }

    async componentDidMount() {
        const records = await API.getAllRecords();
        this.setState({ records });
    }

    async onUserLikedLog(e) {
        let user = sessionStorage.getItem("user");
        user = JSON.parse(user);

        const currentLog = await API.findRecord(e.target.id);
        currentLog.likes += 1;
        currentLog.liked_users.push(user._id);
        API.editRecord(currentLog);
        const currentUser = await USER_API.findUser(user.email);
        currentUser.liked_posts.push(currentLog._id);
        sessionStorage.setItem("user", JSON.stringify(currentUser));
        USER_API.editUser(currentUser);
        window.location.reload();

    }

    render() {
        return (
            <div className="homePage-record__list">
                {this.state.records.map((log) => {
                    return (
                        <LogCard log={log} key={log._id} onUserLikedLog={this.onUserLikedLog} />
                    )
                })}
            </div>
        )
    }
}

export default HomePage;