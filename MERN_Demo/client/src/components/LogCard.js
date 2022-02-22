import React from "react";

class LogCard extends React.Component {

    constructor(props) {
        super(props);
        this.log = this.props.log;
        let user = sessionStorage.getItem("user");
        if (user === 'null') {
        } else { user = JSON.parse(user); }
        this.state = { user: user };
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <img className="user__img" src={this.log.user.profile_img} alt="user-profile" />
                    <p>{this.log.user.userName}</p>
                    {this.state.user === 'null' ?
                        <button className="btn btn-primary likes__btn" id={this.log._id} disabled
                            onClick={this.props.onUserLikedLog}>
                            <i className="bi bi-heart" id={this.log._id} ></i>
                            {this.log.likes}
                        </button>
                        :
                        <section className="like__btn__container">
                            {this.log.liked_users.includes(this.state.user._id) ?
                                <button className="btn btn-primary likes__btn" id={this.log._id} disabled
                                    onClick={this.props.onUserLikedLog}>
                                    <i className="bi bi-heart-fill" id={this.log._id} style={{ color: 'red' }}></i>
                                    {this.log.likes}
                                </button>
                                :
                                <button className="btn btn-primary likes__btn" id={this.log._id}
                                    onClick={this.props.onUserLikedLog}>
                                    <i className="bi bi-heart" id={this.log._id}></i>
                                    {this.log.likes}
                                </button>
                            }
                        </section>
                    }
                </div>
                <img className="card-img-top" src={this.log.url} alt="Card image cap" />
                <div className="card-footer text-muted">
                    <p><i className="bi bi-geo-alt-fill homePage-location__icon"></i>{this.log.city} , {this.log.country}</p>
                    {/* <a href="#" className="homePage-card__read__more">See More {'>>'} </a> */}
                </div>
            </div >
        )
    }
}

export default LogCard;