import React from "react";

import EventDataRow from "../EventDataRow/EventDataRow";

class EventList extends React.Component {
    render() {
        const {
            dataCol,
            events,
            hanldeEditSave,
            hanldeCancel,
            hanldeOnChangeEdit,
            hanldeEdit,
            hanldeDelete,
            hanldeSaveAddNew,
            handleClose,
            hanldeOnChange,
            isShowAddEventRow,
            newEvent
        } = this.props;
        return (
            <table className='event-app__table'>
                <thead>
                    <tr>
                        {dataCol?.map((col) => (
                            <th key={`${col}`}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {events?.map((event) =>
                        event.isEditing ? (
                            <EventDataRow
                                key={event.id}
                                event={event.editEvent}
                                actions={[
                                    {
                                        actionName: "Save",
                                        actionFn: hanldeEditSave,
                                    },
                                    {
                                        actionName: "Cancel",
                                        actionFn: hanldeCancel,
                                    },
                                ]}
                                handleOnchange={hanldeOnChangeEdit}></EventDataRow>
                        ) : (
                            <EventDataRow
                                key={event.id}
                                event={event}
                                actions={[
                                    {
                                        actionName: "Edit",
                                        actionFn: hanldeEdit,
                                    },
                                    {
                                        actionName: "Delete",
                                        actionFn: hanldeDelete,
                                    },
                                ]}></EventDataRow>
                        )
                    )}
                </tbody>
                <tfoot>
                    {isShowAddEventRow ? (
                        <EventDataRow
                            event={newEvent}
                            actions={[
                                {
                                    actionName: "Save",
                                    actionFn: hanldeSaveAddNew,
                                },
                                {
                                    actionName: "Close",
                                    actionFn: handleClose,
                                },
                            ]}
                            handleOnchange={hanldeOnChange}></EventDataRow>
                    ) : null}
                </tfoot>
            </table>
        );
    }
}

export default EventList;
