import React from 'react';
import './App.css';

class Header extends React.Component {
    constructor(props) {
      super(props);
    }
  
    switchToAllEvent =()=>{
        this.props.switchToAllEvent();
    }
    switchToAfterEvent =()=>{
        this.props.switchToAfterEvent();
    }
  
    render() {
      return (
        <header className="header">
          <div className='header_item' onClick={this.switchToAllEvent}>
            AllEvents
          </div>
          <div className='header_item' onClick={this.switchToAfterEvent}>
            AfterEvents
          </div>
        </header>
      )
    }
  }

export default Header;