import React from "react";
import { API } from '../services/connectToDB';

import './styles/createLog.css';

class CreateLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoLabel: "",
            dateTaken: "",
            url: "",
            city: "",
            country: ""
        }
        this.handleOnInput = this.handleOnInput.bind(this);
        this.handleOnSave = this.handleOnSave.bind(this);
    }

    handleOnInput(event) {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
    }

    handleOnSave() {
        if (this.state.eventName === '' || this.state.startDate === '' || this.state.endDate === '') {
            alert('Values cannot be empty!');
        } else {
            const log = {
                photoLabel: this.state.photoLabel,
                dateTaken: this.state.dateTaken,
                url: this.state.url,
                city: this.state.city,
                country: this.state.country
            };
            API.addRecord(log);
        }
    }

    render() {
        return (
            <section>
                <header className="create-log__header">
                    <h1>Upload Log Post</h1>
                </header>

                <form className='create-log__form'>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            name="photoLabel"
                            placeholder="Photo Label"
                            className="form-control"
                            value={this.state.photoLabel}
                            onChange={this.handleOnInput} />
                    </div>

                    <label>Date Taken</label>
                    <div className="input-group mb-3">
                        <input
                            type="date"
                            name="dateTaken"
                            className="form-control"
                            value={this.state.dateTaken}
                            onChange={this.handleOnInput}
                        />
                    </div>

                    <label>Photo URL</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">https://example.com/photo/</span>
                        </div>
                        <input
                            type="text"
                            name="url"
                            className="form-control"
                            id="basic-url"
                            value={this.state.url}
                            onChange={this.handleOnInput}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="City"
                            value={this.state.city}
                            onChange={this.handleOnInput}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            name="country"
                            className="form-control"
                            placeholder="Country"
                            value={this.state.country}
                            onChange={this.handleOnInput}
                        />
                    </div>

                    <button className="btn btn-primary" onClick={this.handleOnSave}>Upload</button>

                </form>

            </section>
        )
    }
}

export default CreateLog;