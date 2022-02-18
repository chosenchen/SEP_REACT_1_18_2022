import React, {useState} from 'react';
import EventApp from './components/EventApp/EventApp';
import ComingEvent from './components/ComingEvent/ComingEvent';
import './App.css';

function App() {
 const [showEvent, setshowEvent] = useState(true)
  return (
    <section>
      <header class="navbar">
        <div className={showEvent?'active':''} onClick={()=>setshowEvent(true)}>EventApp</div>
        <div className={showEvent?'':'active'} onClick={()=>setshowEvent(false)}>ComingEvent</div>
      </header>

      <section className="App">
       { showEvent ? <EventApp /> :  
       <ComingEvent />}
          
      </section>
    </section>
  );
}

export default App;
