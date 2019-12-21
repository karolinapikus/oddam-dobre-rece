import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Home.scss';

import HomeHeader from "../HomeHeader/HomeHeader"
import HomeThreeColumns from '../HomeThreeColumns/HomeThreeColumns';
import HomeSimpleSteps from '../HomeSimpleSteps/HomeSimpleSteps';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeContact from '../HomeContact/HomeContact';

class Home extends Component {
    render(){
        return (
            <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAbout />
            <HomeContact />
            </>
        )
    }
}

export default Home