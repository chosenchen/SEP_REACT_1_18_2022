import React from 'react';

class ComingEventDataRow extends React.Component {
  render() {
    const {
      event
    } = this.props;


    return (
      <tr key={event.id}>
        <td>
          {event.eventName}
        </td>
        <td>
          {event.startDate}
        </td>
        <td>
          {event.endDate}
        </td>
      </tr>
    );
  }
}

export default ComingEventDataRow;
