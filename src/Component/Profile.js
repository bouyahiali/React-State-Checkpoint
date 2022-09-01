import React, { Component } from "react";


class Profile extends Component {
    state = {
        counter: 0
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 })
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <div className="container">
                    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                        <div className="card p-4 shadow-lg p-3 mb-5 bg-white rounded">
                            <div className=" image d-flex flex-column justify-content-center align-items-center ">
                                <img src={this.props.info.imgSc} style={{ height: 100, width: 100 }} alt="" />
                                <span className="name mt-3">{this.props.info.fullname}</span> <span className="idd">@Bouyahi</span>
                                <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                    <span className="idd1">{this.props.info.profession}</span>
                                </div>
                                <button className="btn btn-primary al" >follow Me!</button>
                                <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                    <span className="number">10665<span className="follow">Followers</span></span>
                                </div>
                                <div className="text mt-3">
                                    <span>{this.props.info.bio}</span>
                                </div>
                                <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                    <a href='#'><i className="fa fa-twitter"></i></a >
                                    <a href='#'><i className="fa fa-facebook-f"></i></a >
                                    <a href='#'><i className="fa fa-instagram"></i></a >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
