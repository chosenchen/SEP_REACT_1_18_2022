import React, { useState } from 'react';
import './EventApp.css';
import { withEventData } from '../../hoc/withEventData';

import { EventData } from '../../models/EventData';

import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import Button from '../Button/Button';



// class EventApp extends React.Component {
//   state = {
//     dataCol: ['Event Name', 'Start Date', 'End Date', 'Actions'],
//     isShowAddEventRow: false,
//     newEvent: new EventData('', '' + Date.now(), '' + Date.now()),
//   };

//   hanldeAddEvent = () => {
//     this.setState({
//       isShowAddEventRow: true,
//     });
//   };
//   hanldeOnChange = (newEvent) => {
//     this.setState({
//       newEvent: {
//         ...newEvent,
//       },
//     });
//   };

//   handleCloseAddNew = () => {
//     this.setState({
//       isShowAddEventRow: false,
//       newEvent: new EventData('', '' + Date.now(), '' + Date.now()),
//     });
//   };

//   hanldeSaveAddNew = () => {
//     const { eventName, startDate, endDate } = this.state.newEvent;
//     const newEvent = new EventData(eventName, startDate, endDate);
//     newEvent.parseTimeStamp();
//     if (newEvent.isValidForSave()) {
//       this.props.handleAddEvent(newEvent).then((data) => {
//         this.handleCloseAddNew();
//       });
//     } else {
//       alert('inValid');
//     }
//   };

//   handleEditSave = (editEventObj) => {
//     this.props.handleUpdateEvent(editEventObj).then((data) => {
//       this.props.handleSetEdit(editEventObj, false);
//     });
//   };

//   renderHeader = () => <Button onClick={this.hanldeAddEvent}>Add Event</Button>;
//   renderFooter = () => {
//     if (this.state.isShowAddEventRow) {
//       return (
//         <EventDataRow
//           event={this.state.newEvent}
//           actions={[
//             {
//               actionName: 'Save',
//               actionFn: this.hanldeSaveAddNew,
//             },
//             {
//               actionName: 'Close',
//               actionFn: this.handleCloseAddNew,
//             },
//           ]}
//           handleOnchange={this.hanldeOnChange}
//         ></EventDataRow>
//       );
//     } else {
//       return null;
//     }
//   };

//   componentWillUnmount() {
//     console.log('EVENTAPP componentWillUnmount ');
//   }

//   render() {
//     console.log('render Event App');

//     const {
//       events,
//       handleOnChangeEditEvent,
//       handleDeleteEvent,
//       handleSetEdit,
//     } = this.props;
//     return (
//       <EventTable
//         dataCol={this.state.dataCol}
//         renderFooter={this.renderFooter}
//         renderHeader={this.renderHeader}
//       >
//         {events?.map((event) =>
//           event.isEditing ? (
//             <EventDataRow
//               key={event.id}
//               event={event.editEvent}
//               actions={[
//                 {
//                   actionName: 'Save',
//                   actionFn: this.handleEditSave,
//                 },
//                 {
//                   actionName: 'Cancel',
//                   actionFn: () => handleSetEdit(event, false),
//                 },
//               ]}
//               handleOnchange={handleOnChangeEditEvent}
//             ></EventDataRow>
//           ) : (
//             <EventDataRow
//               key={event.id}
//               event={event}
//               actions={[
//                 {
//                   actionName: 'Edit',
//                   actionFn: () => handleSetEdit(event, true),
//                 },
//                 {
//                   actionName: 'Delete',
//                   actionFn: handleDeleteEvent,
//                 },
//               ]}
//             ></EventDataRow>
//           )
//         )}
//       </EventTable>
//     );
//   }
// }
/////////////////
const EventApp = (props) => {
  const [dataCol, setDataCol] = useState(['Event Name', 'Start Date', 'End Date', 'Actions']);
  const [isShowAddEventRow, setIsShowAddEventRow] = useState(false);
  const [newEvent, setNewEvent] = useState(new EventData('', '' + Date.now(), '' + Date.now()));

  const {
    events,
    handleOnChangeEditEvent,
    handleDeleteEvent,
    handleSetEdit,
  } = props;

  const hanldeAddEvent = () => {
    setIsShowAddEventRow(true);
  };
  const handleOnChange = (newE) => {
    console.log('newE',newE)
    setNewEvent(
      newE
    );
  };

  const handleCloseAddNew = () => {
    setIsShowAddEventRow(false);
    setNewEvent(new EventData('', '' + Date.now(), '' + Date.now()));
  };

  const hanldeSaveAddNew = () => {
    const { eventName, startDate, endDate } = newEvent;
    console.log('newEvent', newEvent)
    const newE = new EventData(eventName, startDate, endDate);
    console.log('newE', newE)
    newE.parseTimeStamp();
    if (newE.isValidForSave()) {
      props.handleAddEvent(newE).then((data) => {     //naming convention
        handleCloseAddNew();
      });
    } else {
      alert('inValid');
    }
  };

  const handleEditSave = (editEventObj) => {
    props.handleUpdateEvent(editEventObj).then((data) => {
      props.handleSetEdit(editEventObj, false);
    });
  };

  const renderHeader = () => <Button onClick={hanldeAddEvent}>Add Event</Button>;
  const renderFooter = () => {
    if (isShowAddEventRow) {
      console.log('show add row')
      return (
        <EventDataRow
          handleOnChange={handleOnChange}
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
  )
}

const EventManger = withEventData(EventApp);

export default EventManger;
