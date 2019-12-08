import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Home.scss';

import HomeHeader from "../HomeHeader/HomeHeader"

class Home extends Component {
    render(){
        return (
            <>
            <HomeHeader />
            </>
        )
    }
}

export default Home