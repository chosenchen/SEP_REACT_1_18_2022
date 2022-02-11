import logo from './logo.svg';
import './App.css';
import React from 'react';

class Eventslist_header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="flex-containter eventlist-header">
        <div>Event Name</div>
        <div>Start date</div>
        <div>End date</div>
        <div>Actions</div>
      </header>
    )
  }
}

class Eventslist_item extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        eventName: props.data.eventName,
        startDate: this.formatDate(new Date(+props.data.startDate)),
        endDate: this.formatDate(new Date(+props.data.endDate)),
        btnState:1,
      }
      //this.editEvent= this.editEvent.bind(this);
      this.helperHandlerDelete = this.helperHandlerDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleClose= this.handleClose.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangestartDate = this.handleChangestartDate.bind(this);
      this.handleChangeendDate = this.handleChangeendDate.bind(this);
      this.helperHandlerUpdate = this.helperHandlerUpdate.bind(this);
    }
    helperHandlerDelete(){
      this.props.deleteEvent(this.props.data.id);
    }
    helperHandlerUpdate(){
      const events = {eventName:this.state.eventName,startDate:new Date(this.state.startDate).getTime(),endDate:new Date(this.state.endDate).getTime()}; 
      this.props.updateEvent(this.props.data.id,events);
      this.setState({btnState:1});
    }
    handleEdit(){
       this.setState({btnState:2});
    }
    handleClose(){
      this.setState({btnState:1});
    }
    handleChangeName(ev){
      this.setState({eventName: ev.target.value});
    }
    handleChangestartDate(ev){
      this.setState({startDate: ev.target.value});
    }
    handleChangeendDate(ev){
      this.setState({endDate: ev.target.value});
    }

    formatDate = (date) => {
      
      let M = parseInt(date.getMonth()) + 1;
      if (M < 10) {
          M = "0" + M;
      }
      let D = parseInt(date.getDate())+1;
      if (D < 10) {
          D = "0" + D;
      }
      return date.getFullYear() + "-" + M + "-" + D;
      
    }
    render(){
      const pid = this.props.data.id;
      const bt1 =  <div className="event-btn-group bt-group-1">
      <button className="event-btns edit_btn" type="button" onClick={this.handleEdit}>Edit</button>
      <button className="event-btns delete_btn" type="button" onClick={this.helperHandlerDelete}>Delete</button>
      </div>;
      const bt2 =  <div className="event-btn-group  bt-group-2">
      <button className="event-btns save_btn" type="button" onClick={this.helperHandlerUpdate}>SAVE </button>
      <button className="event-btns close_btn" type="button" onClick={this.handleClose}>CLOSE</button>
      </div>;
      const btngroup = this.state.btnState == 1 ?  bt1:  bt2;
      return (
        <li className="flex-containter" id={this.props.data.id}>
              <input className="event-item event-input-box name-input" name="eventName" disabled={this.state.btnState==1} value={this.state.eventName} onChange={this.handleChangeName}/>
              <input className="event-item event-input-box startDate-input" type="date" name="startDate" disabled={this.state.btnState==1} value={this.state.startDate} onChange={this.handleChangestartDate}/>
              <input className="event-item event-input-box endDate-input" type="date" name="endDate"  disabled={this.state.btnState==1} value={this.state.endDate} onChange={this.handleChangeendDate}/>
              {btngroup}
        </li>
      )
    }
}


class Eventslist_container extends React.Component {
  constructor(props) {
    super(props);
    this.baseurl = 'http://localhost:4000';
    this.path = "events";
    this.state={addField:0,eventslist:[],eventName:"",startDate:"",endDate:""};
    this.addEvent= this.addEvent.bind(this);
    this.deleteEvent= this.deleteEvent.bind(this);
    this.saveEvent= this.saveEvent.bind(this);
    this.closeEvent= this.closeEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangestartDate = this.handleChangestartDate.bind(this);
    this.handleChangeendDate = this.handleChangeendDate.bind(this);
    //this.getEvents();
  }
  componentDidMount(){
    this.getEvents();
  }
  getEvents() {
      fetch([this.baseurl, this.path].join("/"))
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              eventslist: result
            });
          }
        )
  }
  saveEvent(){
    const events = {eventName:this.state.eventName,startDate:new Date(this.state.startDate).getTime(),endDate:new Date(this.state.endDate).getTime()};
    fetch([this.baseurl, this.path].join("/"), {
      method: "POST",
      body: JSON.stringify(events),headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    }).then((response) => response.json())
    .then(
      (result) => {
        this.getEvents();
        this.closeEvent();
        this.setState({eventName:"",startDate:"",endDate:""});
      }
    );
    
  }
  updateEvent(id,event){
    //const events = {eventName:this.state.eventName,startDate:new Date(this.state.startDate).getTime(),endDate:new Date(this.state.endDate).getTime()};
    fetch([this.baseurl, this.path,id].join("/"), {
      method: "PUT",
      body: JSON.stringify(event),headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    }).then((response) => response.json())
    .then(
      (result) => {
        this.getEvents();
      }
    );
    
  }

  
  deleteEvent(id) {
    fetch([this.baseurl, this.path,id].join("/"),
    {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
    }})
    .then(res => res.json())
      .then(
        (result) => {
          this.getEvents();
        }
      )
  }
  handleChangeName(ev){
    this.setState({eventName: ev.target.value});
  }
  handleChangestartDate(ev){
    this.setState({startDate: ev.target.value});
  }
  handleChangeendDate(ev){
    this.setState({endDate: ev.target.value});
  }
  
  addEvent(){
    this.setState({addField:1});
  }
  closeEvent(){
    this.setState({addField:0});
  }

  render() {
    let eventls = this.state.eventslist.map((event)=> <Eventslist_item  key={event.id} data={event}  deleteEvent={this.deleteEvent} updateEvent={this.updateEvent}/>);
    const addsItems = <li key= "add_field" className="flex-containter" id="add_field">
    <input className="event-item event-input-box"  name="eventName" id="addfield-name" value={this.state.eventName} onChange={this.handleChangeName}/>
    <input className="event-item event-input-box" type="date" name="startDate" id="addfield-startDate" value={this.state.startDate} onChange={this.handleChangestartDate}/>
    <input className="event-item event-input-box" type="date" name="endDate" id="addfield-endDate" value={this.state.endDate} onChange={this.handleChangeendDate}/>
    <div className="event-btn-group show">
    <button className="event-btns" type="button" id="addfield-savebtn" onClick={this.saveEvent}>SAVE</button>
    <button className="event-btns" type="button" id="addfield-closebtn" onClick={this.closeEvent}>CLOSE</button>
    </div>
    </li>;
    const showAdd = this.state.addField == 1 ? addsItems: <></>;

    return (
      <>
      <div className="eventslist-add">
      <button className="eventslist-addbtn" type="button" id="eventslist-addbtn" onClick={this.addEvent}>ADD NEW</button>
      </div>
      <Eventslist_header />
      <ul id="eventslist__container">
        {eventls}
          {showAdd}
      </ul>
      </>
    )
  }
}

class Eventslist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="eventslist">
      <form>
        <Eventslist_container />
        </form>
      </section>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <h1>Event Lists</h1>
      </header>
    )
  }
}


class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="content">
        <Eventslist / >
        </main>
    )
  }
}
class MyAPP extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <Header/>
      <Content/>
      </>
    )
  }
}




export default MyAPP;
