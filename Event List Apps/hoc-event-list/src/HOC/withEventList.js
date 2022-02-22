import React from "react";
import { API } from '../services/db';

const withEventData = (Component) => {

    return class NewComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                eventList: []
            }
        }

        setEventList = (eventList) => {
            this.setState({ eventList: [...eventList] });
        };

        async componentDidMount() {
            const events = await API.getEvents();
            this.setState({ eventList: events })
        }

        render() {
            const { eventList } = this.state;

            return <Component {...this.props} eventList={eventList} />
        }
    }
}
export default withEventData;