
import React from 'react';
import Header from "./components/Header/Header";
import ComingEvent from "./components/ComingEvent/ComingEvent";

import EventApp from './components/EventApp/EventApp';
import './App.css';

// class App extends React.Component() {
//   constructor(props) {
//     super(props);
//     this.state = { isEventList: false, isComingEvents: false };
//     this.showEventList = this.showEventList.bind(this);
//     this.showComingEvents = this.showComingEvents.bind(this);
//   }

//   showEventList() {
//     this.setState({ isEventList: true ,isComingEvents: false})
//   }

//   showComingEvents() {
//     this.setState({ isEventList: false ,isComingEvents: true})
//   }
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }

//   render(){
//     return (
//       <div className="App">
//         <Header className='Header'
//           showEventList={this.showEventList}
//          showComingEvents={this.showComingEvents}
//         />
//         {this.state.isEventList ?
//           <EventApp /> : null
//         }
//         {this.state.isComingEvents ?
//           <ComingEvent /> : null
//         }
//         <EventApp/>
//       </div>
     

//     );
//   }
 
// }

// export default App;
// import React from 'react';
// import EventApp from './components/EventApp/EventApp';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <EventApp />
      {/* <ComingEvent/> */}
    </div>
  );
}

export default App;
