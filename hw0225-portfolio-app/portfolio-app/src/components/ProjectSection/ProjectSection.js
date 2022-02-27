import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
    const projectList = [
        {
            type: 'luvtalk',
            title: 'LUV TALK Website',
            discription: 'Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.'
        },
        {
            type: 'personal-website',
            title: 'Personal Website',
            discription: 'Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.'
        },
        {
            type: 'strike-zone',
            title: 'Strike Zone Analysis',
            discription: 'Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.'
        },
    ]
    return (
        <section>
            <div className="projects" id="projects">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 text-center">
                            <div className="projects-header">
                                <h1>Projects and Portfolio</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-12 text-center">
                            <div className="projects-header-quote">
                                <h3>Sharing my endeavors and passions...</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {projectList.map(
                            (item) => (
                                <ProjectCard content={item} />
                            )
                        )}
                    </div>

                    <div className="row see-more-btn">
                        <div className="col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
                            <div className="see-more-button">
                                <a className="btn btn-default btn-border" href="#">More Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection