import "./App.css";
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
//import "bootstrap/dist/css/bootstrap.min.css";

const PAGESINFO = {
  Home: "Home",
  Portfolio: "Portfolio",
  Contact: "Contact",
};

function App() {
  const [currentPage, setCurrentPage] = React.useState(PAGESINFO.EventManager);
  const [pagesInfo, setPagesInfo] = React.useState(PAGESINFO);

  const hanldePageChange = (newPageInfo) => {
    setCurrentPage(newPageInfo);
  };

  let curPage = null;
  switch (currentPage) {
    case PAGESINFO.Home:
      curPage = <Main></Main>;
      break;
    case PAGESINFO.Portfolio:
      curPage = <Projects></Projects>;
      break;
    case PAGESINFO.Contact:
      curPage = <Contact></Contact>;
      break;
    default:
  }
  return (
    <div className="App">
      <Navigation
        pagesInfo={pagesInfo}
        hanldePageChange={hanldePageChange}
      ></Navigation>
      {curPage}
      <Main></Main>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
