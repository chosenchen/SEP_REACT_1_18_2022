import React from "react";
import './Main.css'
// json-server -p 4000 db.json change Json server port, otherwise port conflict


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://localhost:4000/events',
            evenLists: [],
            newRowCount: 0,
            updateName:'Edit'
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

    toTimestamp = (strDate) => {
        let datum = Date.parse(strDate);
        return datum.toString()
    }


    //Add new row
    AddRow = () => {
        this.setState({
            newRowCount: this.state.newRowCount + 1
        })

    }

    //Post method
    createList = (eventName, startTimeStamp, endTimeStamp) => {
        fetch(this.state.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                eventName: eventName,
                startDate: startTimeStamp,
                endDate: endTimeStamp,
            }),
        })
            .then((response) => response.json())
            .then(data => {
                const newdata = [...this.state.evenLists, data]
                this.setState(newdata);
            })
    }

    //Delete data
    deleteList = (url, id) => {
        fetch([url, id].join('/'), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
    }
    //Update data
    updateList = (id, eventName, startTimeStamp, endTimeStamp) => {
        fetch([this.state.url, id].join("/"), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                eventName: eventName,
                startDate: startTimeStamp,
                endDate: endTimeStamp,
            }),
        })
            .then((response) => response.json())
           

    }

    //Press save button
    saveData = (e) => {
        const id = e.target.id.split('_')[1]
        const eve_name = document.getElementById(`eventName_${id}`).value
        const start_date = document.getElementById(`startDate_${id}`).value
        const end_date = document.getElementById(`endDate_${id}`).value
        const start_timestamp = this.toTimestamp(start_date)
        const end_timestamp = this.toTimestamp(end_date)
        if (eve_name && start_date && end_date) {
            this.createList(eve_name, start_timestamp, end_timestamp)
            window.location.reload();
           
        } else {
            alert('Please fill out Event name, Start date, End date')
        }
    }

    //Delete data
    deleteData = (e) => {
        const id = e.target.id.split('_')[1]
        this.deleteList(this.state.url, id)
        window.location.reload();
    }


    updateData = (e) =>{
        e.currentTarget.value="UPDATE"
        let id = e.target.id.split('_')[1]
        let eve_name = document.getElementById(`eventName_${id}`)
        let start_date = document.getElementById(`startDate_${id}`)
        let end_date = document.getElementById(`endDate_${id}`)

        eve_name.removeAttribute("disabled")
        start_date.removeAttribute("disabled")
        start_date.setAttribute("type", "Date")
        end_date.removeAttribute("disabled")
        end_date.setAttribute("type", "Date")

        
        let eventName = eve_name.value
        let startTimeStamp = this.toTimestamp(start_date.value)
        let endTimeStamp = this.toTimestamp(end_date.value)

        if(eventName && startTimeStamp && endTimeStamp){
            this.updateList(id, eventName, startTimeStamp, endTimeStamp)

        }else{
            alert('Please fill out Event name, Start date, End date')
        }
    
    }
   

    //Update data
    componentDidMount() {
        fetch(this.state.url)
            .then((response) => response.json())
            .then(data => {
                this.setState({ 
                    evenLists: data,
                    eventName: this.props.eventName,
                    startDate: this.props.startDate,
                    endDate: this.props.endDate
                });
            });

    }

  

    render() {
        return (
            <>
                <main>
                    <section className="table__container">
                        <header className="table__toprow">
                            <button className="add_new" onClick={this.AddRow}>ADD NEW</button>
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
                                                <input disabled defaultValue={item.eventName} id={`eventName_${item["id"]}`} />
                                            </td>
                                            <td>
                                                <input disabled defaultValue={this.timeConverter(item["startDate"])} id={`startDate_${item["id"]}`} />
                                            </td>
                                            <td>
                                                <input disabled defaultValue={this.timeConverter(item["endDate"])} id={`endDate_${item["id"]}`} />
                                            </td>
                                            <td>
                                                <input type="button" className="edit_button" id={`Edit_${item["id"]}`} onClick={this.updateData}  value="EDIT" />
                                                <input type="button" id={`delete_${item["id"]}`} value="DELETE" onClick={this.deleteData} />
                                            </td>
                                        </tr>
                                    )
                                }
                                )}
                                {[...Array(this.state.newRowCount)].map((item, i) => {
                                    let len = this.state.evenLists.length + 1

                                    return (<>
                                        <tr id={`Input_${len}`} key={`${item}_${i}`}>
                                            <td>
                                                <input type="text" id={`eventName_${len}`} defaultValue='' />
                                            </td>
                                            <td>
                                                <input type="date" id={`startDate_${len}`} defaultValue='' />
                                            </td>
                                            <td >
                                                <input type="date" id={`endDate_${len}`} defaultValue='' />
                                            </td>
                                            <td>
                                                <input type="button" id={`save_${len}`} defaultValue="SAVE" onClick={this.saveData} />
                                                <input type="button" id={`close_${len}`} defaultValue="CLOSE" />
                                            </td>
                                        </tr>

                                    </>
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