import React, { useState } from 'react'

import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import navigation from './NavjQuery';

import './Navgation.css'


export default function NavBar() {
    //navigation();
    const [currentComponent, setCurrentComponent] = useState('Home')

    const clikeHandle = (e) => {
        e.preventDefault();
        setCurrentComponent(e.target.innerHTML);
    }

    const imgElement = React.useRef(null);
    let NavHeight

    return (
        <>
        <div className="navigation">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                        <div className="logo">
                                <a href="index.html"><img src="images/logo.svg" 
                                    ref={imgElement}
                                    onLoad={() => NavHeight =imgElement.current.naturalHeight} alt='img'/></a>
                        </div>
                    </div>

                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                        <div className="primary-nav" style={{'height':{NavHeight}}}>
                            <ul>
                                <li><a href="#" onClick={(e) => clikeHandle(e)}>Home</a></li>
                                <li><a href="#"onClick={(e) => clikeHandle(e)}>Portfolio</a></li>
                                <li><a href="#" onClick={(e) => clikeHandle(e)}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
        <section className={currentComponent === 'Home' ? 'active' : 'hidden'}>
            <Home />
        </section>
        <section className={currentComponent === 'Portfolio' ? 'active' : 'hidden'}>
            <Portfolio />
        </section>
        <section className={currentComponent === 'Contact' ? 'active' : 'hidden'}>
            <Contact />
        </section>
        
        <Footer />
        </>
    )
}
