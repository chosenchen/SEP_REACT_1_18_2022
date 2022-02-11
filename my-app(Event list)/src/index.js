// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React, { Component } from 'react';
class Table extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        events: [
           { eventName: "TEST-1", startDate: "2021-12-23", endDate: "2021-12-18", id: 1 },
           { eventName: "TEST-2", startDate: "2021-10-10", endDate: "2021-10-28", id: 2 },
           { eventName: "TEST-3", startDate: "2022-02-12", endDate: "2022-02-20", id: 3 }
        ]
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.events[3])
     return header.map((key, index) => {
        return <th key={index}>{key}</th>
     })
  }

  renderTableData() {
     return this.state.events.map((event, index) => {
        const { eventName, startDate, endDate, id } = event //destructuring
        return (
           <tr key={id}>
              <td>{eventName}</td>
              <td>{startDate}</td>
              <td>{endDate}</td>
              <td>{id}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h1 id='title'>Table Example</h1>
           <table id='events'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}

ReactDOM.render(<Table />, document.getElementById('root'));