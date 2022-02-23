import React from 'react';
import Button from '../Button/Button';

function EventDataRow(props) {
  const handleChange = ({ target: { name, value } }, event) => {
    event[name] = value;
    // { ...event, [name]: value }
    props.handleOnchange(event);
  };

    const { event, handleOnchange, actions } = props;
    console.log('props event', event);

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
                    console.log('add new event', event);
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
