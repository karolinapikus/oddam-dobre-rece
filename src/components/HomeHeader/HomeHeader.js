import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';
import './HomeHeader.scss';

class HomeHeader extends Component {
    render(){
        return (
        <header id="headerID">
            <div className="header__image"></div>
            <div className="header__details">
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
                <div className="header__info">
                <h2>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div className="header__divider"></div>
                <span><Link to="/oddaj-rzeczy" className="header__button">Oddaj rzeczy</Link> <Link to="/zorganizuj-zbiorke" className="header__button">Zorganizuj zbiórkę</Link></span>
                </div>
            </div>
        </header>
        )
    }
}

export default HomeHeader