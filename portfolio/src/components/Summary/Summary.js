import React from "react";
import developerdesign from '../../images/developerdesign.svg'
import responsivedesign from '../../images/responsivedesign.svg'
import innovativesolutions from '../../images/innovativesolutions.svg'
import passion from '../../images/passion.svg'
import './Summary.css'


const SummaryArr = [
    {
        title: 'Development and Design',
        info: 'I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.',
        icon: developerdesign
    },
    {
        title: 'Responsive Layouts',
        info: "Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.",
        icon: responsivedesign
    },
    {
        title: 'Ideas and Solutions',
        info: "There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.",
        icon: innovativesolutions
    },
    {
        title: 'Passion and Dedication',
        info: "With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved.",
        icon: passion
    },

]


const Summary = () => {
    console.log(SummaryArr)
    return (
        <>
            {
                SummaryArr.map((item) =>
                    <section key={item.title} className="Summary-item">
						<img src ={item.icon} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.info}</p>
                        </div>
                    </section>
                )
            }
        </>


    )
}

export default Summary