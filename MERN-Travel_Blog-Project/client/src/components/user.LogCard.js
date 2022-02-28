import React from "react";
import { deleteRecord } from "../services/connectToDB";

function UserLogCard(props) {

    const { log } = props;

    const handleOnDelete = (e) => {
        deleteRecord(e.target.id);
    }

    return (
        <div className="card">
            <div className="card-header">
                <img className="user__img" src={log.user.profile_img} alt="user-profile" />
                <p>{log.user.userName}</p>

                <button className="btn btn-primary likes__btn" id={log._id} disabled >
                    <i className="bi bi-heart-fill" id={log._id} style={{ color: 'red' }}></i>
                    {log.likes}
                </button>

                <button type="button" className="btn btn-warning">
                    <i className="bi bi-pencil-square"></i>
                </button>

                <button type="button" className="btn btn-danger"
                id={log._id} onClick={handleOnDelete}>
                    <i className="bi bi-trash"></i>
                </button>

            </div>
            <img className="card-img-top" src={log.url} alt="" />
            <div className="card-footer text-muted">
                <p><i className="bi bi-geo-alt-fill homePage-location__icon"></i>{log.city} , {log.country}</p>
            </div>
        </div >
    )
}

export default UserLogCard;