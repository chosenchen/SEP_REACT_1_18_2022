import React from "react";

import { appApi } from "../.././appApi.js";

import { fromUnixDate, toUnixDate } from "../../utils.js";

const withEventData = (Component) => {
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        eventList: [],
        isShowAddEventRow: false,
        newEvent: {
          eventName: "",
          startDate: "",
          endDate: "",
        },
      };
    }

    fetchAllEvents = async () => {
      const events = await appApi.getEvents();
      const updatedEvents = events.map((event) => {
        event.isEditing = false;
        event.editEvent = {
          eventName: event.eventName,
          startDate: fromUnixDate(event.startDate),
          endDate: fromUnixDate(event.endDate),
          id: event.id,
        };
        event.startDate = fromUnixDate(event.startDate);
        event.endDate = fromUnixDate(event.endDate);
        return event;
      });

      this.setState({ eventList: updatedEvents });
    };

    componentDidMount() {
      this.fetchAllEvents();
    }

    handleAddOnClick = (e) => {
      this.setState({ isShowAddEventRow: true });
    };

    handleDeleteOnClick = async (id) => {
      this.setState({
        eventList: this.state.eventList.filter((event) => event.id !== id),
      });

      await appApi.deleteEvent(id);
      this.fetchAllEvents();
    };
  
    handleAddInputOnChange = (e) => {
      this.setState({
        newEvent: {
          ...this.state.newEvent,
          [e.target.name]: e.target.value,
        },
      });
    };
  
    handleAddCloseOnClick = () => {
      this.setState({
        isShowAddEventRow: false,
        newEvent: {
          eventName: "",
          startDate: "",
          endDate: "",
        },
      });
    };
  
    handleAddSaveOnClick = async () => {
      const event = {
        eventName: this.state.newEvent.eventName,
        startDate: toUnixDate(this.state.newEvent.startDate),
        endDate: toUnixDate(this.state.newEvent.endDate),
      };
  
      if (
        this.state.newEvent.eventName === "" ||
        this.state.newEvent.startDate === "" ||
        this.state.newEvent.endDate === ""
      ) {
        alert("input all the required fields");
      } else {
        await appApi.saveEvent(event);
        this.fetchAllEvents();
        this.handleAddCloseOnClick();
      }
      
    };
  
    handleEditOnClick = (id) => {


      this.setState({
        eventList: this.state.eventList.map((event) => {
          if (event.id === id) {
            return { ...event, isEditing: true };
          } else {
            return event;
          }
        }),
      });
    };
  
    handleEditCloseOnClick = (id) => {
      this.setState({
        eventList: this.state.eventList.map((event) => {
          if (event.id === id) {
            return { ...event, isEditing: false };
          } else {
            return event;
          }
        }),
      });
    };
  
    handleEditInputOnChange = (e, id) => {
      this.setState({
        eventList: this.state.eventList.map((event) => {
          if (event.id === id) {
            return {
              ...event,
              editEvent: {
                ...event.editEvent,
                [e.target.name]: e.target.value,
              },
            };
          } else {
            return event;
          }
        })
      });
    };
  
    handleEditSaveOnClick=async(newEvent)=> {

      this.setState({
        eventList: this.state.eventList.map((event) => {
          if (event.id === newEvent.id) {
            return {
              ...newEvent,
              isEditing: false,
            };
          } else {
            return event;
          }
        }),
      });

      const event = {
        eventName: newEvent.eventName,
        startDate: toUnixDate(newEvent.startDate),
        endDate: toUnixDate(newEvent.endDate),
        id: newEvent.id
      };
  
      if (
        this.state.eventName === "" ||
        this.state.startDate === "" ||
        this.state.endDate === ""
      ) {
        alert("input all the required fields");
      } else {
        await appApi.updateEvent(event);
        this.fetchAllEvents();
        
      }

    }

    render() {

      return (
        <Component
          {...this.props}

          eventList={this.state.eventList}
          isShowAddEventRow={this.state.isShowAddEventRow}
          newEvent={this.state.newEvent}
          updateEventList={this.updateEventList}
          deleteSaveEvent={this.deleteSaveEvent}
          handleAddOnClick={this.handleAddOnClick}
          handleDeleteOnClick={this.handleDeleteOnClick}
          handleAddInputOnChange={this.handleAddInputOnChange}
          handleAddCloseOnClick={this.handleAddCloseOnClick}
          handleAddSaveOnClick={this.handleAddSaveOnClick}
          handleEditOnClick={this.handleEditOnClick}
          handleEditCloseOnClick={this.handleEditCloseOnClick}
          handleEditInputOnChange={this.handleEditInputOnChange}
          handleEditSaveOnClick={this.handleEditSaveOnClick}

        />
      );
    }
  };
};

export default withEventData;
