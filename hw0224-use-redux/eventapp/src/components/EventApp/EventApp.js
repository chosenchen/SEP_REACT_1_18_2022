import React from 'react';
import './EventApp.css';

import { EventData } from '../../models/EventData';
import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import Button from '../Button/Button';
import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from '../../services/event.api';

// import { useEventData } from '../../hooks/useEventData';
// import { store } from '../../EventRedux/EventRedux';
import { useEventData } from '../../hooks/useEventData';

const EventApp = (props) => {

  const [dataCol, setDataCol] = React.useState([
    'Event Name',
    'Start Date',
    'End Date',
    'Actions',
  ]);
  const [isShowAddEventRow, setIsShowAddEventRow] = React.useState(false);
  const [newEvent, setNewEvent] = React.useState(
    new EventData('', '' + Date.now(), '' + Date.now())
  );
  const [
    events,
    handleUpdateEvent,
    handleDeleteEvent,
    handleAddEvent,
    handleSetEdit,
    handleOnChangeEditEvent,
  ] = useEventData();

  console.log('from hook', events);
  
//   const [_, forceUpdate] = React.useState(false);

//   const generateEditEventstate = (event) => {
//     event.isEditing = false;
//     event.editEvent = new EventData(
//       event.eventName,
//       event.startDate,
//       event.endDate,
//       event.id
//     );
//   };

//   React.useEffect(() => {
//     console.log('did mount');

//     store.subscribe(() => {
//       forceUpdate((_) => !_);
//     });
// //API get
//     const { fetchResult, controller } = getAllEvents();
//     fetchResult.then((data) => {
//       const allEvents = data.map(({ eventName, startDate, endDate, id }) => {
//         const newEvent = new EventData(eventName, startDate, endDate, id);
//         generateEditEventstate(newEvent);
//         return newEvent;
//       });
//       store.dispatch({ type: 'setEvents/get', data: allEvents });
//       // setEvents(events);
//     });
//     return () => {
//       // controller.abort();
//       console.log('click');
//     };
//   }, []);

//   const handleUpdateEvent = (updateEvent) => {
//     return editEvent(updateEvent).then((data) => {
//       store.dispatch({ type: 'setEvents/edit', data: data });
//       // setEvents(
//       //   events.map((event) => {
//       //     if (event.id === data.id) {
//       //       return {
//       //         ...event,
//       //         ...data,
//       //       };
//       //     } else {
//       //       return event;
//       //     }
//       //   })
//       // );
//     });
//   };

//   const handleDeleteEvent = (deletedEvent) => {
//     return deleteEvent(deletedEvent).then((data) => {
//       store.dispatch({ type: 'setEvents/delete', data: deleteEvent });
//       // setEvents(
//       //   events.filter((event) => {
//       //     if (event.id === deletedEvent.id) {
//       //       return false;
//       //     } else {
//       //       return true;
//       //     }
//       //   })
//       // );
//     });
//   };

//   // API CALL
//   const handleAddEvent = (addEvent) => {
//     return addNewEvent(addEvent).then(
//       ({ eventName, startDate, endDate, id }) => {
//         const newEvent = new EventData(eventName, startDate, endDate, id);
//         generateEditEventstate(newEvent);
//         // setEvents([...events, newEvent]);
//         store.dispatch({ type: 'setEvents/add', data: newEvent });
//       }
//     );
//   };

//   // UI STATE
//   const handleSetEdit = (setEditEvent, isEdit) => {
//     store.dispatch({ type: 'setEvents/handleSetEdit', data: { editEvent: setEditEvent, isEditing: isEdit } });
//     // setEvents(
//     //   events.map((event) => {
//     //     if (event.id === setEditEvent.id) {
//     //       return { ...event, isEditing: isEdit };
//     //     } else {
//     //       return event;
//     //     }
//     //   })
//     // );
//   };


//   // UI STATE
//   const handleOnChangeEditEvent = (editEvent) => {
//     store.dispatch({ type: 'setEvents/handleOnChang', data: editEvent });
//     // setEvents(
//     //   events.map((event) => {
//     //     if (event.id === editEvent.id) {
//     //       return {
//     //         ...event,
//     //         editEvent: { ...editEvent },
//     //       };
//     //     } else {
//     //       return event;
//     //     }
//     //   })
//     // );
//   };

  const hanldeAddEvent = () => {
    setIsShowAddEventRow(true);
  };
  const hanldeOnChange = (newEvent) => {
    setNewEvent(newEvent);
  };

  const handleCloseAddNew = () => {
    setIsShowAddEventRow(false);
    setNewEvent(new EventData('', '' + Date.now(), '' + Date.now()));
  };

  const hanldeSaveAddNew = (newEventD) => {
    const { eventName, startDate, endDate } = newEvent;

    const newEventData = new EventData(eventName, startDate, endDate);
    newEventData.parseTimeStamp();

    if (newEventData.isValidForSave()) {
      handleAddEvent(newEventData).then((data) => {
        handleCloseAddNew();
      });
    } else {
      alert('inValid');
    }
  };

  const handleEditSave = (editEventObj) => {
    handleUpdateEvent(editEventObj).then((data) => {
      handleSetEdit(editEventObj, false);
    });
  };

  const renderHeader = () => (
    <Button onClick={hanldeAddEvent}>Add Event</Button>
  );
  const renderFooter = () => {
    if (isShowAddEventRow) {
      return (
        <EventDataRow
          event={newEvent}
          actions={[
            {
              actionName: 'Save',
              actionFn: hanldeSaveAddNew,
            },
            {
              actionName: 'Close',
              actionFn: handleCloseAddNew,
            },
          ]}
          handleOnchange={hanldeOnChange}
        ></EventDataRow>
      );
    } else {
      return null;
    }
  };

  return (
    <EventTable
      dataCol={dataCol}
      renderFooter={renderFooter}
      renderHeader={renderHeader}
    >
      {events?.map((event) =>
        event.isEditing ? (
          <EventDataRow
            key={event.id}
            event={event.editEvent}
            actions={[
              {
                actionName: 'Save',
                actionFn: handleEditSave,
              },
              {
                actionName: 'Cancel',
                actionFn: () => handleSetEdit(event, false),
              },
            ]}
            handleOnchange={handleOnChangeEditEvent}
          ></EventDataRow>
        ) : (
          <EventDataRow
            key={event.id}
            event={event}
            actions={[
              {
                actionName: 'Edit',
                actionFn: () => handleSetEdit(event, true),
              },
              {
                actionName: 'Delete',
                actionFn: handleDeleteEvent,
              },
            ]}
          ></EventDataRow>
        )
      )}
    </EventTable>
  );
};

// const EventManger = withEventData(EventApp);

export default EventApp;
