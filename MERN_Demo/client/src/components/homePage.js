import React from "react";
import { API } from '../services/connectToDB';

import './styles/homePage.css';

import "bootstrap-icons/font/bootstrap-icons.css";

const Log = props => (
    <div className="card" key={props.log._id}>
        <div className="card-header">
            <i className="bi bi-person-circle homePage-user__icon"></i>
            <p>Name</p>
        </div>
        <img className="card-img-top" src={props.log.url} alt="Card image cap" />
        <div className="card-footer text-muted">
            <p><i className="bi bi-geo-alt-fill homePage-location__icon"></i>{props.log.city} , {props.log.country}</p>
            <a href="#" className="homePage-card__read__more">See More {'>>'} </a>
        </div>
    </div>
)

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { records: [] };
    }

    async componentDidMount() {
        const records = await API.getAllRecords();
        this.setState({ records });
    }

    recordList() {
        return this.state.records.map((record) => {
            return <Log log={record} key={record._id} />;
        })
    }

    render() {
        return (
            <div className="homePage-record__list">
                {this.recordList()}
            </div>
        )
    }
}

export default HomePage;