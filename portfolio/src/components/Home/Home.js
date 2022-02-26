import React, { useState, useRef, useEffect } from "react"
import './Home.css';
import Summary from "../Summary/Summary";

import Footer from '../Footer/Footer'

//By new props, useState to update functional components
const Home = (props) => {

    return (
        <section>
            <section className="main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="entry-banner text-center">
                            <h1 id="hello">Hello, I'm</h1>
                            <h1 id="name">XXXX</h1>
                            <h1 id="person-description">UI Developer. UX Desinger. Problem Solver.</h1>
                        </div>
                    </div>

                    <div className="row wrapper">
                        <div className="banner-buttons">
                                <a className="btn btn-default btn-border" href="#about">Info</a>
                                <a className="btn btn-default btn-border" href="#projects">Portfolio</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section>
                <div className="about" id="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 text-center">
                                <div className="about-header">
                                    <h1>About Me</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-12 text-center">
                                <div className="about-header-quote">
                                    <h3>Sharing a little bit of my story...</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="about-general-description ">
                                <div className="col-sm-8 col-md-8 ">
                                    <h2>General Overview</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="statistic-row">
                                <div className="about-statistic-description">
                                    <div className="col-sm-8 col-md-8">
                                        <h2>Statistics</h2>
                                        <h5><em>And for those that don't fancy reading:</em></h5>
                                        <br />

                                        <p>Male, 200 years old.</p>
                                        <p>Five feet 110 inches</p>
                                        <p>Favorite fonts:Roboto </p>
                                        <p>Loves to learn new things</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="about-option-buttons">
                                <div className="col-sm-2 col-md-2">
                                    <a href="#contact" className="btn btn-default btn-black-border">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           {/* Summary section */}
           <section>
             <div class = "summary">
                <Summary />
              </div>
           </section>

        </section>
       
    )

}

export default Home