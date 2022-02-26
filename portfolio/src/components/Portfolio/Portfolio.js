import React from "react";
import luvtalklogo from '../../images/luvtalklogo.png'
import logo from '../../images/logo.svg'
import mlbproject from '../../images/mlbproject.png'
import './Portfolio.css'


export const PortfolioArr = [
    {
        title: 'LUV TALK Website',
        info: 'Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.',
        icon: luvtalklogo,
        link: ''
    },
    {
        title: 'Personal Website',
        info: "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.",
        icon: logo,
        link: ''
    },
    {
        title: 'Strike Zone Analysis',
        info: "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.",
        icon: mlbproject,
        link: ''
    }

]



const Portfolio = () => {

    return (
        <>
            <div className="projects" id="projects">
                <h1>Projects and Portfolio</h1>
                <p className="projects-header-quote ">Sharing my endeavors and passions...</p>
               <div className="projects-wrapper">
                {
                    
                    PortfolioArr.map((item) => {
                        const bgstyle={ 
                            background:  `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
                            url(${item.icon})`,
                            backgroundPosition: 'center center',
                          }
                          
                        return (
                            <>
                                    <section key={item.title} className="Portfolio-item" style={bgstyle} >
                                        <div className="Portfolio-item__content">
                                            <h3>{item.title}</h3>
                                            <p>{item.info}</p>
                                            <a href={item.link}>More</a>
                                        </div>
                                    </section>
                   
                            </>
                        )
                    }
                    
                   
                       
                    )
                    
                }
                 </div>
            </div>
        </>


    )
}

export default Portfolio