import React from 'react'
import SummaryCard from './SummaryCard';

const SummarySection = () => {
    const firstRow =
        [{
            type: 'development',
            title: 'Development and Design',
            discription: 'I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.',
            imgSrc: './images/developerdesign.svg'
        },
        {
            type: 'responsive',
            title: 'Responsive Layouts',
            discription: 'Development and design isn\'t merely putting information on the site or preferred media outlet.I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.',
            imgSrc: './images/responsivedesign.svg'
            }];
    const secondRow =
        [{
            type: 'ideas',
            title: 'Ideas and Solutions',
            discription: 'There are still many problems that exist in today\'s society, including laziness.Luckily, I hope to combat these issues by innovating, developing easy- to - use programs, solutions, or products.',
            imgSrc: './images/innovativesolutions.svg'
        },
        {
            type: 'passion',
            title: 'Passion and Dedication',
            discription: 'With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved.',
            imgSrc: './images/passion.svg'
            }];
    
    return (
        <section>
            <div className="summary">
                <div className="container-fluid">
                    <div className="row">
                        {firstRow.map((content) => (
                            <SummaryCard content={content}/>
                        ))}
                    </div>
                    <div className="row">
                        {secondRow.map((content) => (
                            <SummaryCard content={content} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SummarySection;