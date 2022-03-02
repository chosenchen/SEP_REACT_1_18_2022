import React from 'react';
import './Header.css';
import EventCounter from '../EventCounter/EventCounter';
import CounterFn from '../Counter/CounterFn';
import { Link } from 'react-router-dom';
export default class Header extends React.Component {
  // hanldeNavClick = (e, pageInfo) => {
  //   e.preventDefault();
  //   this.props.hanldePageChange(pageInfo);
  // };
  render() {
    // const { pagesInfo } = this.props;
    return (
      <header className="app-header">
        <nav className="app-header__nav">
          <EventCounter></EventCounter>
          <CounterFn></CounterFn>
          <div className='options'>
            <Link to='/eventApp'>EVENT APP</Link>
            <Link to='/upcoming'>UPCOMING EVENTS</Link>
            <Link to='/counterclass'>COUNTER CLASS</Link>
            <Link to='/counterfn'>COUNTER FN</Link>
          </div>

        </nav>
      </header>
      // <header className="app-header">
      //   <nav className="app-header__nav">
      //     <EventCounter></EventCounter>
      //     <CounterFn></CounterFn>
      //     {Object.keys(pagesInfo).map((key) => (
      //       <a
      //         href={key}
      //         key={key}
      //         onClick={(e) => this.hanldeNavClick(e, key)}
      //       >
      //         {key}
      //       </a>
      //     ))}
      //   </nav>
      // </header>
    );
  }
}
