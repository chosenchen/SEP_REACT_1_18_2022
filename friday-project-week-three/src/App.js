// import './App.css';
import React, { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import ContactPage from "./components/ContactPage/ContactPage";

// import './boostrap/css/boostrap.min.css'
const PAGESINFO = {
  Home: "HomePage ",
  Portfolio: "PortfolioPage",
  Contact: "ContactPage",
 
};

function App() {
  const [currentPage, setCurPage] = useState(PAGESINFO.EventManager);
  const [pagesInfo, setPageInfo] = useState(PAGESINFO);
  function hanldePageChange(newPageInfo) {
    setCurPage(newPageInfo);
  }
  let curPage = <HomePage />;
  switch (currentPage) {
    case PAGESINFO.Portfolio:
      curPage = <PortfolioPage></PortfolioPage>;
      break;
    case PAGESINFO.Contact:
      curPage = <ContactPage></ContactPage>;
      break;
    case PAGESINFO.Home:
      curPage = <HomePage></HomePage>;
      break;
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
}

export default App;
