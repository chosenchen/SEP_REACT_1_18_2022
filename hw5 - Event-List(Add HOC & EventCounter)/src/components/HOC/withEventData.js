import React from "react";

import API from "../../api/Api";

const withEventData = (Component) => {
    return class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                eventList: [],
            }
        }

        componentDidMount() {
            API.getEvents().then(res => {
               this.setState({ eventList: res });
            });
        }

        render() {
            const {eventList} = this.state;

            return (               
                <Component {...this.props} eventList={eventList} />
            )           
        }
    }
}

export default withEventData;