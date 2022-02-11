import AllEvents from "./components/AllEvents";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Event List App</h1>
      </header>

      <div className="container">
        <button className="addbtn">ADD NEW</button>
        <div className="event-container">
        <AllEvents/>
        </div>
    </div>
    </div>
  );
}

export default App;
