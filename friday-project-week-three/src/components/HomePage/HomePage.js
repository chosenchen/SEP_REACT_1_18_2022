import React from 'react';
import PortfolioPage from "../PortfolioPage/PortfolioPage"
import ContactPage from "../ContactPage/ContactPage"
import MainPage from "../MainPage/MainPage"
import AboutMePage from '../AboutMePage/AboutMePage'
import SummaryPage from '../SummaryPage/SummaryPage';
import Footer from '../Footer/Footer';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
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