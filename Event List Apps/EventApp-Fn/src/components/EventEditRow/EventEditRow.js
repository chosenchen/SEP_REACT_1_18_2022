import React from 'react';

export default function EventEditRow() {
  
  const { event, hanldeOnChangeEdit, hanldeEditSave, hanldeCancel } =
    this.props;

  return (
    <tr key={event.id}>
      <td>
        <input
          type="text"
          name="eventName"
          value={event.editEvent.eventName}
          onChange={(e) => hanldeOnChangeEdit(e, event.id)}
        />
      </td>
      <td>
        <input
          type="date"
          name="startDate"
          value={event.editEvent.startDate}
          onChange={(e) => hanldeOnChangeEdit(e, event.id)}
        />
      </td>
      <td>
        <input
          type="date"
          name="endDate"
          value={event.editEvent.endDate}
          onChange={(e) => hanldeOnChangeEdit(e, event.id)}
        />
      </td>
      <td>
        <button onClick={() => hanldeEditSave(event.editEvent)}>Save</button>
        <button onClick={() => hanldeCancel(event.id)}>Cancel</button>
      </td>
    </tr>
  );
}
