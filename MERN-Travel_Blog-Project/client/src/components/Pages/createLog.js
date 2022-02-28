import React, { useState } from "react";
import '../../styles/createLog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogData } from "../../models/log.model";
import useLogData from "../../hooks/useLogData";

function CreateLog() {

    const [newRecord, setNewRecord] = useState(new LogData('','','','','','', 0, {},[]));
    const [isVaild, setIsValid] = useState(true);
    const [errors, setErrors] = useState('');

    const {
        handleAddRecord,
    } = useLogData();

    const handleOnChange = (e) => {
        setNewRecord({ ...newRecord, [e.target.name]: e.target.value })
    }
    
    const handleOnSaveAddRecord = () => {
        if (newRecord.photoLabel === '' || newRecord.url === '' || newRecord.city === '' || newRecord.country === '') {
            setIsValid(false);
            setErrors('Inputs cannot be empty');
        } else {
            let user = sessionStorage.getItem("user");
            user = JSON.parse(user);
            const { photoLabel, dateTaken, url, city, country , user: { userName, profile_img } } = newRecord;
            const currentNewLog = {
                photoLabel, dateTaken, url, city, country, likes:0,
                user: {
                    userName,
                    profile_img
                },
                liked_users: []
            }
            currentNewLog.user.userName = user.userName;
            currentNewLog.user.profile_img = user.profile_img;
            handleAddRecord(currentNewLog);
            window.location.href = '/';
        };
    }

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
                        value={newRecord.photoLabel}
                        onChange={handleOnChange} />
                </div>

                <label>Date Taken</label>
                <div className="input-group mb-3">
                    <input
                        type="date"
                        name="dateTaken"
                        className="form-control"
                        value={newRecord.dateTaken}
                        onChange={handleOnChange}
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
                        value={newRecord.url}
                        onChange={handleOnChange}
                    />
                </div>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="City"
                        value={newRecord.city}
                        onChange={handleOnChange}
                    />
                </div>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="country"
                        className="form-control"
                        placeholder="Country"
                        value={newRecord.country}
                        onChange={handleOnChange}
                    />
                </div>

                <button className="btn btn-primary" onClick={handleOnSaveAddRecord}>Upload</button>

                {!isVaild ?
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                        <i className="bi bi-exclamation-triangle-fill bi flex-shrink-0 me-2"></i>
                        <div>
                            {errors}
                        </div>
                    </div>
                    : ''}

            </section>

        </section>
    )
}

export default CreateLog;