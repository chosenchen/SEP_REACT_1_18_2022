import React from 'react';
import './Footer.css';
import facebook from '../../images/facebook.svg'
import linkedin from '../../images/linkedin.svg'
import pinterest from '../../images/pinterest.svg'
import email from '../../images/email.svg'
import {PortfolioArr} from '../Portfolio/Portfolio'

const socialMedia = [facebook, linkedin, pinterest, email]

export default class Footer extends React.Component {
 
  render() {
    
    return (
        <div className = "footer">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "media-links">
						{socialMedia.map((icon, index)=>
							<div className ="media-links-icon" key={`${icon}_${index}`}>
							<a href = "#"><img className = "img-responsive" src ={icon} /></a>
						</div>)}
					</div>
				</div>

				<div className ="wrapper">
					<h4>Phone: XXXXXX</h4>
					<h4>Email: XXXXX@gmail.com</h4>
				</div>

				<div className = "row">
					<div className = "col-sm-4 col-md-4 text-center">
						<div className = "company-information">
							<h3>XXXX</h3>
							<h4>Copyright &copy; 2021</h4>
							<h4>NY</h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "home-footer">
							<h4><a href = "#">Home</a></h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "portfolio-footer">
							<h4><a href = "#">Portfolio</a></h4>
							<ul>
								{
								  PortfolioArr.map(Portfolio=><li className="portfolio-item"><a href = "#">{Portfolio.title}</a></li>)
								}
							
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "resume-footer">
							<h4><a href = "#">Resume</a></h4>
							<ul>
								<li><a href = "#">Download</a></li>
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "contact-footer">
							<h4><a href = "#">Contact</a></h4>
						</div>
					</div>
				</div>
			</div>
		</div>
      
    );
  }
}
