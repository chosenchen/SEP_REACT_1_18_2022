import React from "react";

import CallToAction from './Pages/callToAction';
import About from './Pages/about';
import Summary from './Pages/summary';
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";

class HomePage extends React.Component {

    render() {
        return (
            <section>
                <CallToAction />
                <About />
                <Summary />
                <Projects />
                <Contact />
            </section>
        )
    }
}

export default HomePage;
