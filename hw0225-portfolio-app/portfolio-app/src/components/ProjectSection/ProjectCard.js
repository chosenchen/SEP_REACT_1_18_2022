import React from 'react'

const ProjectCard = (props) => {
    const { content } = props;
    const { type, title, discription } = content;
    return (
      <div className="col-sm-4 col-md-4 text-center">
          <div className={`${type}-project`}>
                <h3 className='title'>{title}</h3>
                <p>{discription}</p>
                <div className="row more-info-btns">
                  <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                      <div className="project-more-info">
                          <a className="btn btn-default btn-border" href="#">More</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ProjectCard