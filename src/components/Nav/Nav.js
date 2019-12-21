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
                        <li><Scroll to="headerID">Start</Scroll></li>
                        <li>O co chodzi?</li>
                        <li>O nas</li>
                        <li>Fundacja i organizacje</li>
                        <li>Kontakt</li>
                    </ul>
                </nav>
        )
    }
}

export default Nav;