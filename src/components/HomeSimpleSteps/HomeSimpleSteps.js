import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';
import './HomeSimpleSteps.scss';

class HomeSimpleSteps extends Component {
    render(){
        return(
            <div className="steps__container" id="stepsID">
            <div className="steps__header">
                <h2>Wystarczą 4 proste kroki</h2>
                <div className="header-divider"></div>
            </div>
            <div className="steps__list">
<div className="step">
    <div className="step1"></div>
    <h3>Wybierz rzeczy</h3>
    <hr></hr>
    <p>ubrania, zabawki, sprzęt i inne</p>
</div>
<div className="step">
    <div className="step2"></div>
    <h3>Spakuj je</h3>
    <hr></hr>
    <p>skorzystaj z worków na śmieci</p>
</div>
<div className="step">
    <div className="step3"></div>
    <h3>Zdecyduj komu chcesz pomóc</h3>
    <hr></hr>
    <p>wybierz zaufane miejsce</p>
</div>
<div className="step">
    <div className="step4"></div>
    <h3>Zamów kuriera</h3>
    <hr></hr>
    <p>kurier przyjedzie w dogodnym terminie</p>
</div>
            </div>
            <div className="steps__nav">
                <Link to="/logowanie">Oddaj rzeczy</Link>
            </div>
            </div>
        )
    }
}

export default HomeSimpleSteps;