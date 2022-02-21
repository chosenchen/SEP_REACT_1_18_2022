import React from "react";

class LogCard extends React.Component {

    constructor(props) {
        super(props);
        this.log = this.props.log;
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <img className="user__img" src="./images/user-profile.png" alt="user-profile" />
                    <p>{this.log.user.userName}</p>
                    <button className="btn btn-primary likes__btn" id={this.log._id}
                         onClick={this.props.onUserLikedLog}>
                        <i className="bi bi-heart" id={this.log._id}></i>
                        {this.log.likes}
                    </button>
                </div>
                <img className="card-img-top" src={this.log.url} alt="Card image cap" />
                <div className="card-footer text-muted">
                    <p><i className="bi bi-geo-alt-fill homePage-location__icon"></i>{this.log.city} , {this.log.country}</p>
                    {/* <a href="#" className="homePage-card__read__more">See More {'>>'} </a> */}
                </div>
            </div>
        )
    }
}

export default LogCard;