import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';
import './HomeAbout.scss';

class HomeAbout extends Component {
    render(){
        return(
            <div className="about__container">
                <div className="about__desc">
                    <h2>O nas</h2>
                    <div className="header-divider"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="about-signature"/>
                </div>
                <div className="about__photo"></div>
            </div>
        )
    }
}

export default HomeAbout