import React, {useState, useEffect} from 'react';
import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from '../../services/event.api';
import { EventData } from '../../models/EventData';

// export default class WithEventData extends React.Component {
//   state = {
//     events: [],
//   };
//   componentDidMount() {
//     this.fetchAllEvents();
//   }
//   generateEditEventstate = (event) => {
//     event.isEditing = false;
//     event.editEvent = new EventData(
//       event.eventName,
//       event.startDate,
//       event.endDate,
//       event.id
//     );
//   };
//   // API CALL
//   fetchAllEvents = () => {
//     const { fetchResult, controller } = getAllEvents();
//     if (this.controllerList) {
//       this.controllerList.push(controller);
//     } else {
//       this.controllerList = [controller];
//     }
//     fetchResult.then((data) => {
//       const events = data.map(({ eventName, startDate, endDate, id }) => {
//         const newEvent = new EventData(eventName, startDate, endDate, id);
//         this.generateEditEventstate(newEvent);
//         return newEvent;
//       });

//       this.setState({
//         events,
//       });
//     });
//   };
//   // API CALL
//   handleUpdateEvent = (updateEvent) => {
//     return editEvent(updateEvent).then((data) => {
//       this.setState({
//         events: this.state.events.map((event) => {
//           if (event.id === data.id) {
//             return {
//               ...event,
//               ...data,
//             };
//           } else {
//             return event;
//           }
//         }),
//       });
//     });
//   };
//   // API CALL
//   handleDeleteEvent = (deletedEvent) => {
//     return deleteEvent(deletedEvent).then((data) => {
//       this.setState({
//         events: this.state.events.filter((event) => {
//           if (event.id === deletedEvent.id) {
//             return false;
//           } else {
//             return true;
//           }
//         }),
//       });
//     });
//   };
//   // API CALL
//   handleAddEvent = (addEvent) => {
//     return addNewEvent(addEvent).then(
//       ({ eventName, startDate, endDate, id }) => {
//         const newEvent = new EventData(eventName, startDate, endDate, id);
//         this.generateEditEventstate(newEvent);
//         this.setState({
//           events: [...this.state.events, newEvent],
//         });
//       }
//     );
//   };
//   // UI STATE
//   handleSetEdit = (setEditEvent, isEdit) => {
//     this.setState({
//       events: this.state.events.map((event) => {
//         if (event.id === setEditEvent.id) {
//           return { ...event, isEditing: isEdit };
//         } else {
//           return event;
//         }
//       }),
//     });
//   };
//   // UI STATE
//   handleOnChangeEditEvent = (editEvent) => {
//     console.log(editEvent);
//     this.setState({
//       events: this.state.events.map((event) => {
//         if (event.id === editEvent.id) {
//           return {
//             ...event,
//             editEvent: { ...editEvent },
//           };
//         } else {
//           return event;
//         }
//       }),
//     });
//   };

//   render() {
//     return this.props.renderChildren(
//       this.state.events,
//       this.handleSetEdit,
//       this.handleOnChangeEditEvent,
//       this.handleAddEvent,
//       this.handleUpdateEvent
//     );
//   }
// }

const WithEventData = (props)=>{
  const [state, setState] = useState({
    events: [],
  })

  useEffect(()=>{
   
    fetchAllEvents()
  },[])

  const generateEditEventstate = (event) => {
    event.isEditing = false;
    event.editEvent = new EventData(
      event.eventName,
      event.startDate,
      event.endDate,
      event.id
    );
  };
  let controllerList=[]
  // API CALL
  const fetchAllEvents = () => {
    const { fetchResult, controller } = getAllEvents();
    if (controllerList) {
      controllerList.push(controller);
    } else {
      controllerList = [controller];
    }
    fetchResult.then((data) => {
      const events = data.map(({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id);
        generateEditEventstate(newEvent);
        return newEvent;
      });

      setState({
        events,
      });
    });
  };

// API CALL
const handleUpdateEvent = (updateEvent) => {
  return editEvent(updateEvent).then((data) => {
    setState({
      events: state.events.map((event) => {
        if (event.id === data.id) {
          return {
            ...event,
            ...data,
          };
        } else {
          return event;
        }
      }),
    });
  });
};

// API CALL
const handleDeleteEvent = (deletedEvent) => {
  return deleteEvent(deletedEvent).then((data) => {
    setState({
      events: state.events.filter((event) => {
        if (event.id === deletedEvent.id) {
          return false;
        } else {
          return true;
        }
      }),
    });
  });
};
// API CALL
const handleAddEvent = (addEvent) => {
  return addNewEvent(addEvent).then(
    ({ eventName, startDate, endDate, id }) => {
      const newEvent = new EventData(eventName, startDate, endDate, id);
      generateEditEventstate(newEvent);
      setState({
        events: [...state.events, newEvent],
      });
    }
  );
};

// UI STATE
const handleSetEdit = (setEditEvent, isEdit) => {
  setState({
    events: state.events.map((event) => {
      if (event.id === setEditEvent.id) {
        return { ...event, isEditing: isEdit };
      } else {
        return event;
      }
    }),
  });
};

 // UI STATE
 const handleOnChangeEditEvent = (editEvent) => {
 
  setState({
    events: state.events.map((event) => {
      if (event.id === editEvent.id) {
        return {
          ...event,
          editEvent: { ...editEvent },
        };
      } else {
        return event;
      }
    }),
  });
};

return(
  props.renderChildren(
    state.events,
    handleSetEdit,
    handleOnChangeEditEvent,
    handleAddEvent,
    handleUpdateEvent
  )
)
}

export default WithEventData;
