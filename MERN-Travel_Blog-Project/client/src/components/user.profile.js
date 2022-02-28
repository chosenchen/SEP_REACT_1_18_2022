import React from 'react';
import UserLogCard from "./user.LogCard";
import useLogData from "../hooks/useLogData";

function UserProfile() {

    const {
        records
    } = useLogData();

    let authUser = sessionStorage.getItem("user");
    if (authUser === 'null') {
    } else { authUser = JSON.parse(authUser); }

    let userLogs = [];

   records?.map((log) => { 
       if(log.user.userName === authUser.userName){
            userLogs.push(log);
       }
    });

    return (
        <div className="homePage-record__list">
            {userLogs?.map((log) => {
                return (
                    <UserLogCard log={log} key={log._id} />
                )
            })}
        </div>
    )



}

export default UserProfile;