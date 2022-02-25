import Main from './Main';
import About from './About';
import Projects from './Projects';
import Summary from './Summary';
import Contact from './Contact';

function MainBody() {
    return (
      <div className="mainBody">
        <Main />
        <About/>
        <Summary />       
        <Projects />       
        <Contact />       
      </div>
    );
  }

  export default MainBody;