import React from "react";
import './Main.css'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://localhost:3001/events',
            evenLists: []
        };
    }

    //Define timestamp to Date converter
    timeConverter = (timestamp) => {
        const timestamp_int = parseInt(timestamp)
        const all_date = new Date(timestamp_int);
        const year = all_date.getFullYear()
        const month = (all_date.getMonth() + 1) < 10 ? (all_date.getMonth() + 1).toString().padStart(2, '0') : (all_date.getMonth() + 1)
        const date = all_date.getDate() < 10 ? all_date.getDate().toString().padStart(2, '0') : all_date.getDate()
        return `${year}-${month}-${date}`
    }
    

    componentDidMount() {
        fetch(this.state.url)
            .then((response) => response.json())
            .then(data => {
                this.setState({ evenLists: data });
            });
    }

    render() {
        return (
            <>
                <main>
                    <section className="table__container">
                        <header className="table__toprow">
                            <button className="add_new">ADD NEW</button>
                        </header>
                        <table>
                            <thead className="table__head">
                                <tr>
                                    <th>Event name</th>
                                    <th>Start date</th>
                                    <th>End date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="table_eventlist">
                                {this.state.evenLists.map((item, index) => {
                                    return (
                                             <tr className="table__content" key={index}>  
                                                <td>
                                                     <input disabled value={item["eventName"]} id={`eventName_${item["id"]}`} />
                                                 </td>
                                                 <td>
                                                     <input disabled value={this.timeConverter(item["startDate"])} id={`startDate_${item["id"]}`} />
                                                 </td>
                                                 <td>
                                                     <input disabled value={this.timeConverter(item["endDate"])} id={`endDate_${item["id"]}`} />
                                                 </td>
                                                 <td>
                                                     <input type="submit" className="edit_button" id={`submit_${item["id"]}`} value="EDIT" />
                                                     <input type="submit" id="delete-event" value="DELETE" />
                                                 </td>
                                                </tr>
                                        )
                                     } 
                                 )}
                        </tbody>

                    </table>

                </section>
            </main>
            </>

        );
    }
}

export default Main;