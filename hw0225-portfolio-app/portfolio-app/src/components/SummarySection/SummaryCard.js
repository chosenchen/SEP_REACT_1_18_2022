import React from 'react'

const SummaryCard = (props) => {
    const { content } = props;
    const { type, title, discription, imgSrc } = content;
  return (
      <div className={`${type}-summary col row`}>
          <div className="col-sm-2 col-md-2 col-sm-offset-2 col-md-offset-2">
              <div className={`${type}-img`}>
                  <img className="img-fluid" src={imgSrc}/>
              </div>
          </div>

          <div className="col-sm-10 col-md-10">
              <div className={`${type}-description`}>
                  <h3>{title}</h3>
                  <p>{discription}</p>
              </div>
          </div>
      </div>
  )
}

export default SummaryCard