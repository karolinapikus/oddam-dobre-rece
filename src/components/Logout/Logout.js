import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './Logout.scss';


import Nav from "../Nav/Nav"
class Logout extends Component {
    render(){
        return (
            <>
            <Nav />
            <div className="login__form">
<div className="login__header">
    <h2>Wylogowanie nastąpiło pomyślnie</h2>
    <div className="header-divider"></div>
</div>
    <div class="login__links">
    <ul className="login-nav">
                        <li><Link to="/">Strona główna</Link></li>
                        
                    </ul>
    </div>

            </div>
            </>
        )
    }
}

export default Logout;