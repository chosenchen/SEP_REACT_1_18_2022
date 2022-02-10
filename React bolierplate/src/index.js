import BlogHeader from './blog';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [{ name: "Helloworld", date: "2022-02-09", id: 1 }, { name: "greeting", date: "2022-02-19", id: 2 }] }
  }
  render() {
    const ls = this.state.events.map((event) =>
      <li key={event.id}>{event.name}</li>
    )
    return (
      <div>
        <BlogHeader />
        <ul>
          <li>{ls}</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <EventList />,
  document.getElementById('root')
);