import React from "react";
import { findRecord, editRecord } from '../services/connectToDB';
import { USER_API } from "../services/user.connectToDB";
import useLogData from "../hooks/useLogData";
function LogCard(props) {

    const {
        handleOnDelete
    } = useLogData();

    let authUser = sessionStorage.getItem("user");
    if (authUser === 'null') {
    } else { authUser = JSON.parse(authUser); }

    const { log, auth } = props;
    const [likes, setlikes] = React.useState(log.likes);
    const [userLikedPost, setUserLikedPost] = React.useState(log.liked_users.includes(authUser._id));

    const onUserLikedLog = async (e) => {
        const currentUser = await USER_API.findUser(authUser.email);
        const currentLog = await findRecord(e.target.id);

        currentLog.likes += 1;

        currentLog.liked_users.push(currentUser._id);
        currentUser.liked_posts.push(currentLog._id);

        USER_API.editUser(currentUser);
        editRecord(currentLog);

        setlikes(currentLog.likes);
        setUserLikedPost(true);
    }

    return (
        <div className="card">
            <div className="card-header">
                <img className="user__img" src={log.user.profile_img} alt="user-profile" />
                <p>{log.user.userName}</p>
                {authUser === 'null' ?
                    <button className="btn btn-primary likes__btn" id={log._id} disabled
                        onClick={onUserLikedLog}>
                        <i className="bi bi-heart" id={log._id} ></i>
                        {likes}
                    </button>
                    :
                    <section className="like__btn__container">
                        {userLikedPost ?
                            <button className="btn btn-primary likes__btn" id={log._id} disabled
                                onClick={onUserLikedLog}>
                                <i className="bi bi-heart-fill" id={log._id} style={{ color: 'red' }}></i>
                                {likes}
                            </button>
                            :
                            <button className="btn btn-primary likes__btn" id={log._id}
                                onClick={onUserLikedLog}>
                                <i className="bi bi-heart" id={log._id}></i>
                                {likes}
                            </button>
                        }
                    </section>
                }

                {auth === true ?
                    <button type="button" className="btn btn-danger"
                        id={log._id} onClick={handleOnDelete}>
                        <i className="bi bi-trash" id={log._id}></i>
                    </button>
                :null}

            </div>
            <img className="card-img-top" src={log.url} alt="" />
            <div className="card-footer text-muted">
                <p><i className="bi bi-geo-alt-fill homePage-location__icon"></i>{log.city} , {log.country}</p>
                {/* <a href="#" className="homePage-card__read__more">See More {'>>'} </a> */}
            </div>
        </div >
    )
}

export default LogCard;