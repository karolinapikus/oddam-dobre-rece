import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';
import './Nav.scss';

class Nav extends Component {
    render(){
        return (
            <nav>
                    <ul className="small__nav">
                        <li><Link to="/zaloguj">Zaloguj</Link></li>
                        <li><Link to="/zaloz-konto">Załóz konto</Link></li>
                    </ul>
                    <ul className="main__nav">
                        <li><Scroll to="headerID" smooth={true}>Start</Scroll></li>
                        <li><Scroll to="stepsID" smooth={true}> O co chodzi?</Scroll></li>
                        <li><Scroll to="aboutID" smooth={true}>O nas</Scroll></li>
                        <li><Scroll to="whoID" smooth={true}>Fundacja i organizacje</Scroll></li>
                        <li><Scroll to="contactID" smooth={true}>Kontakt</Scroll></li>
                    </ul>
                </nav>
        )
    }
}

export default Nav;