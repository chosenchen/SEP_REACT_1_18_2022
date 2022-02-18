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

    onUserLikedLog(e) {
        console.log(e.target.id);
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