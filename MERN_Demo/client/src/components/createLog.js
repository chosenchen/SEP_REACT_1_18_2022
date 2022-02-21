import React from "react";
import { API } from '../services/connectToDB';

import './styles/createLog.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoLabel: "",
            dateTaken: "",
            url: "",
            city: "",
            country: "",
            isVaild: true,
            error: "",
        }
        this.handleOnInput = this.handleOnInput.bind(this);
        this.handleOnSave = this.handleOnSave.bind(this);
    }

    handleOnInput(event) {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
    }

    async handleOnSave() {
        if (this.state.photoLabel === '' || this.state.url === '' || this.state.city === '' || this.state.country === '') {
            this.setState({ isVaild: false, error: 'Inputs cannot be empty'})
        } else {
            let user = sessionStorage.getItem("user");
            user = JSON.parse(user);
            const log = {
                photoLabel: this.state.photoLabel,
                dateTaken: this.state.dateTaken,
                url: this.state.url,
                city: this.state.city,
                country: this.state.country,
                user: {
                    userName: user.userName,
                }
            };
            await API.addRecord(log);
            window.location.href = "/";
        }
    }

    render() {
        return (
            <section>
                <header className="create-log__header">
                    <h1>Upload Log Post</h1>
                </header>

                <section className='form'>

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

                    {!this.state.isVaild ?
                        <div className="alert alert-danger d-flex align-items-center" role="alert">
                            <i className="bi bi-exclamation-triangle-fill bi flex-shrink-0 me-2"></i>
                            <div>
                                {this.state.error}
                            </div>
                        </div>
                        : ''}

                </section>

            </section>
        )
    }
}

export default CreateLog;