import React from "react";

export default class EventList extends React.Component {


    render() {
        return (
            <table>
                <thead>
                    <tr className="header">
                        <th>Event name</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    <tr className="row" id="4">
                        <td>
                            <input disabled value="test1" />
                        </td>
                        <td>
                            <input disabled value="2022-2-20" />
                        </td>
                        <td>
                            <input disabled value="2022-2-25" />
                        </td>
                        <td>
                            <button value="EDIT" className="edit-btn">EDIT</button>
                            <button className="delete-btn" id="4" value="DELETE">DELETE</button>
                        </td>
                    </tr>
                </tbody>
            </table >
        );
    }
};