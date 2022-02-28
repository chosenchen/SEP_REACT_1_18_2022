import React from 'react';
import LogCard from "../LogCard";
import useLogData from "../../hooks/useLogData";

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
       return userLogs;
    });

    return (
        <div className="homePage-record__list">
            {userLogs?.map((log) => {
                return (
                    <LogCard log={log} key={log._id} auth={true}/>
                )
            })}
        </div>
    )



}

export default UserProfile;