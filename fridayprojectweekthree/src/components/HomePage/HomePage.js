import React from 'react';
import Header from '../Header/Header';
import PortfolioPage from "../PortfolioPage/PortfolioPage"
import ContactPage from "../ContactPage/ContactPage"
import MainPage from "../MainPage/MainPage"
import AboutMePage from '../AboutMePage/AboutMePage'
import SummaryPage from '../SummaryPage/SummaryPage';
import Footer from '../Footer/Footer';

export default class HomePage extends React.Component {
//   hanldeNavClick = (e, pageInfo) => {
//     e.preventDefault();
//     this.props.hanldePageChange(pageInfo);
//   };
  render() {
    const { pagesInfo } = this.props;
    return (
      <div>
          <Header/>
          <MainPage/>
          <AboutMePage />
          <SummaryPage/>
          <PortfolioPage/>
          <ContactPage />
          < Footer/>
      </div>

				
    );
  }
}