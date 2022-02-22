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

    updateEventList = (id, bool, e) => {
      if (e) {
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
          }),
        });
      } else {
        this.setState({
          eventList: this.state.eventList.map((event) => {
            if (event.id === id) {
              return { ...event, isEditing: bool };
            } else {
              return event;
            }
          }),
        });
      }
    };

    deleteSaveEvent = (id) => {
      this.setState({
        eventList: this.state.eventList.filter((event) => event.id !== id),
      });
    };

    handleAddOnClick = (e) => {
      this.setState({ isShowAddEventRow: true });
    };

    handleDeleteOnClick = async (id) => {
      await appApi.deleteEvent(id);
      this.fetchAllEvents();
      this.deleteSaveEvent(id)
    
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
      this.updateEventList(id, true);
    };
  
    handleEditCloseOnClick = (id) => {
      this.updateEventList(id, false);
    };
  
    handleEditInputOnChange = (e, id) => {
      this.updateEventList(id, true, e);
    };
  
    handleEditSaveOnClick=async(newEvent)=> {
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
