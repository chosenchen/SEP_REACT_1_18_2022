import React from "react";
import { API } from '../services/connectToDB';

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
        const currentLog = await API.findRecord(e.target.id);
        currentLog.likes += 1;
        API.editRecord(currentLog);
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