import React, { Component } from 'react';
import ComingEventsPage from '../ComingEvent/ComingEvent';
import AllEventsPage from '../AllEvents/AllEvents';
import RenderProps from '../RenderProps/RenderProps';

import "./Header.css";

export default class Header2 extends Component {
    state = {
        currentPage : 'HOME',
    }

    render() {
        return (
            <div>
                <ul>
                    <li><button onClick={(e) => 
                        this.setState({ currentPage: e.target.innerHTML})}>HOME</button></li>
                    <li><button onClick={(e) => 
                        this.setState({ currentPage: e.target.innerHTML})}>COMING EVENT</button></li>
                </ul>
                <header>
                    <h1>Event List App</h1>
                </header>
                
                <section className={this.state.currentPage === 'HOME'? 'active':'hidden'}>
                    <RenderProps render={() => { }} />
                    <AllEventsPage />
                </section>
                <section className={this.state.currentPage === 'COMING EVENT' ? 'active' : 'hidden'}>
                    <ComingEventsPage />
                </section>
                
            </div>
        )
    }
}
