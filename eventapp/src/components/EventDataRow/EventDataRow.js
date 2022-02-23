import React from 'react';
import Button from '../Button/Button';

class EventDataRow extends React.Component {
  handleChange = ({ target: { name, value } }, event) => {
    this.props.handleOnChange({ ...event, [name]: value });
  };

  render() {
    const { event, handleOnChange, actions } = this.props;
    console.log(this.props)
    return (
      <tr key={event.id}>
        <td>
          <input
            type="text"
            name="eventName"
            disabled={handleOnChange ? false : true}
            value={event.eventName}
            onChange={
              handleOnChange ? (e) => this.handleChange(e, event) : () => {}
            }
          />
        </td>
        <td>
          <input
            type="date"
            name="startDate"
            value={event.startDate}
            disabled={handleOnChange ? false : true}
            onChange={
              handleOnChange ? (e) => this.handleChange(e, event) : () => {}
            }
          />
        </td>
        <td>
          <input
            type="date"
            name="endDate"
            value={event.endDate}
            disabled={handleOnChange ? false : true}
            onChange={
              handleOnChange ? (e) => this.handleChange(e, event) : () => {}
            }
          />
        </td>
        {actions ? (
          <td>
            {actions.map((action) => {
              return (
                <Button
                  key={action.actionName}
                  onClick={() => action.actionFn(event)}
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
}

export default EventDataRow;
