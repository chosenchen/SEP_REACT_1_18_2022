import React from 'react';
import './App.css';
import Home from './components/Home/Home.js'
import Portfolio from './components/Portfolio/Portfolio.js'
import Contact from './components/Contact/Contact.js'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

const PAGESINFO = {
  Home: 'Home',
  Portfolio: 'Portfolio',
  Contact: 'Contact'
};
class App extends React.Component {
  state = {
    currentPage: PAGESINFO.Home,
    pagesInfo: PAGESINFO,
  };

  hanldePageChange = (newPageInfo) => {
    this.setState({
      currentPage: newPageInfo,
    });
  };

  render() {
    const { currentPage, pagesInfo } = this.state;

    let curPage = null;
    switch (currentPage) {
      case PAGESINFO.Home:
        curPage = <Home />;
        break;
      case PAGESINFO.Portfolio:
        curPage = <Portfolio />;
        break;
      case PAGESINFO.Contact:
          curPage = <Contact />;
          break;
      default:
    }

    return (
      <div className="App">
        <Header
          pagesInfo={pagesInfo}
          hanldePageChange={this.hanldePageChange}
        ></Header>
        {curPage}
        <Footer />
      </div>
    );
  }
}

export default App;
