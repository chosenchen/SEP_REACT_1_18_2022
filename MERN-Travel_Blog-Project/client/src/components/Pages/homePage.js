import React from "react";
import '../../styles/homePage.css';
import LogCard from "../LogCard";
import useLogData from "../../hooks/useLogData";
import "bootstrap-icons/font/bootstrap-icons.css";

function HomePage() {

    const {
        records
    } = useLogData();

    return (
        <div className="homePage-record__list">
            {records?.map((log) => {
                return (
                    <LogCard log={log} key={log._id} />
                )
            })}
        </div>
    )
}


export default HomePage;