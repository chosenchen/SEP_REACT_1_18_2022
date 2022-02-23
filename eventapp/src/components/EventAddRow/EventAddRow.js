import React from 'react';
import PropTypes from 'prop-types';
class EventAddRow extends React.Component {
  render() {
    const { newEvent, handleOnChange, hanldeSaveAddNew, handleClose } =
      this.props;
      console.log(this.props)
    return (
      <tr>
        <td>
          <input
            type="text"
            name="eventName"
            value={newEvent.eventName}
            onChange={handleOnChange}
          />
        </td>
        <td>
          <input
            onChange={handleOnChange}
            type="date"
            value={newEvent.startDate}
            name="startDate"
          />
        </td>
        <td>
          <input
            onChange={handleOnChange}
            name="endDate"
            type="date"
            value={newEvent.endDate}
          />
        </td>
        <td>
          <button onClick={hanldeSaveAddNew}>Save</button>
          <button onClick={handleClose}>Close</button>
        </td>
      </tr>
    );
  }
}

EventAddRow.propTypes = {
  newEvent: PropTypes.object,
  hanldeOnChange: PropTypes.func,
  hanldeSaveAddNew: PropTypes.func,
  handleClose: PropTypes.func,
};

export default EventAddRow;
