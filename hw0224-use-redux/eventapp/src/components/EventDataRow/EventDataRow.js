// import React from 'react';
// import Button from '../Button/Button';

// class EventDataRow extends React.Component {
//   handleChange = ({ target: { name, value } }, event) => {
//     // console.log({ ...event, [name]: value });
//     this.props.handleOnchange({ ...event, [name]: value });
//   };

//   render() {
//     const { event, handleOnchange, actions } = this.props;
//     // console.log('render DataRow', event);
//     return (
//       <tr key={event.id}>
//         <td>
//           <input
//             type="text"
//             name="eventName"
//             disabled={handleOnchange ? false : true}
//             value={event.eventName}
//             onChange={
//               handleOnchange ? (e) => this.handleChange(e, event) : () => {}
//             }
//           />
//         </td>
//         <td>
//           <input
//             type="date"
//             name="startDate"
//             value={event.startDate}
//             disabled={handleOnchange ? false : true}
//             onChange={
//               handleOnchange ? (e) => this.handleChange(e, event) : () => {}
//             }
//           />
//         </td>
//         <td>
//           <input
//             type="date"
//             name="endDate"
//             value={event.endDate}
//             disabled={handleOnchange ? false : true}
//             onChange={
//               handleOnchange ? (e) => this.handleChange(e, event) : () => {}
//             }
//           />
//         </td>
//         {actions ? (
//           <td>
//             {actions.map((action) => {
//               return (
//                 <Button
//                   key={action.actionName}
//                   onClick={() => action.actionFn(event)}
//                 >
//                   {action.actionName}
//                 </Button>
//               );
//             })}
//           </td>
//         ) : null}
//       </tr>
//     );
//   }
// }

// export default EventDataRow;
import React from 'react';
import Button from '../Button/Button';

function EventDataRow(props) {
  const handleChange = ({ target: { name, value } }, event) => {
    // event[name] = value;
    // { ...event, [name]: value }
    // console.log('name val', name, value);

    props.handleOnchange({ ...event, [name]: value });
  };

  const { event, handleOnchange, actions } = props;
  // console.log('props event', event);

  return (
    <tr key={event.id}>
      <td>
        <input
          type="text"
          name="eventName"
          disabled={handleOnchange ? false : true}
          value={event.eventName}
          onChange={
            handleOnchange ? (e) => handleChange(e, event) : () => { }
          }
        />
      </td>
      <td>
        <input
          type="date"
          name="startDate"
          value={event.startDate}
          disabled={handleOnchange ? false : true}
          onChange={
            handleOnchange ? (e) => handleChange(e, event) : () => { }
          }
        />
      </td>
      <td>
        <input
          type="date"
          name="endDate"
          value={event.endDate}
          disabled={handleOnchange ? false : true}
          onChange={
            handleOnchange ? (e) => handleChange(e, event) : () => { }
          }
        />
      </td>
      {actions ? (
        <td>
          {actions.map((action) => {
            return (
              <Button
                key={action.actionName}
                onClick={() => {
                  action.actionFn(event);
                }}
              >
                {action.actionName}
              </Button>
            );
          })}
        </td>
      ) : null}
    </tr>
  );
}


export default EventDataRow;
