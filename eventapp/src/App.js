import React, { useState } from "react";
import EventApp from "./components/EventApp/EventApp";
import UpComingEvent from "./components/UpComingEvents/UpComingEvents";
import "./App.css";

import Header from "./components/Header/Header";
import EventCounter from "./components/EventCounter/EventCounter";

const PAGESINFO = {
  EventManager: "EventManager",
  UpComingEvent: "UpComingEvent",
  EventCounter: "CounterFn",
};
const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGESINFO.EventManager);
  const [pagesInfo, setPagesInfo] = useState(PAGESINFO);
  const hanldePageChange = (newPageInfo) => {
    setCurrentPage(newPageInfo);
  };
  let curPage = null;
  switch (currentPage) {
    case PAGESINFO.EventManager:
      curPage = <EventApp></EventApp>;
      break;
    case PAGESINFO.UpComingEvent:
      curPage = <UpComingEvent></UpComingEvent>;
      break;
    case PAGESINFO.EventCounter:
      curPage = <EventCounter></EventCounter>;
    default:
  }
  return (
    <div className="App">
      <Header
        pagesInfo={pagesInfo}
        hanldePageChange={hanldePageChange}
      ></Header>
      {curPage}
    </div>
  );
};
// class App extends React.Component {
//   state = {
//     currentPage: PAGESINFO.EventManager,
//     pagesInfo: PAGESINFO,
//   };

//   hanldePageChange = (newPageInfo) => {
//     this.setState({
//       currentPage: newPageInfo,
//     });
//   };

//   render() {
//     const { currentPage, pagesInfo } = this.state;

//     let curPage = null;
//     switch (currentPage) {
//       case PAGESINFO.EventManager:
//         curPage = <EventApp></EventApp>;
//         break;
//       case PAGESINFO.UpComingEvent:
//         curPage = <UpComingEvent></UpComingEvent>;
//         break;
//       default:
//     }

//     return (
//       <div className="App">
//         <Header
//           pagesInfo={pagesInfo}
//           hanldePageChange={this.hanldePageChange}
//         ></Header>
//         {curPage}
//       </div>
//     );
//   }
// }

export default App;
