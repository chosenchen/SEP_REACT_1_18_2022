import React from 'react';
import PropTypes from 'prop-types';

class UpComingEventsRow extends React.Component {
  render() {
    const { event, hanldeEdit, hanldeDelete } = this.props;
    return (
      <tr key={event.id}>
        <td>
          <input type="text" disabled value={event.eventName} />
        </td>
        <td>
          <input type="date" disabled value={event.startDate} />
        </td>
        <td>
          <input type="date" disabled value={event.endDate} />
        </td>
      </tr>
    );
  }
}

UpComingEventsRow.propTypes = {
  event: PropTypes.object,
  hanldeEdit: PropTypes.func,
  hanldeDelete: PropTypes.func,
};
export default UpComingEventsRow;