import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './Login.scss';


import Nav from "../Nav/Nav"
class Login extends Component {
    render(){
        return (
            <>
            <Nav />
            <div className="login__form">
<div className="login__header">
    <h2>Zaloguj się</h2>
    <div className="header-divider"></div>
</div>
    <form>
        <div class="form-fields">
        <label for="email">E-mail</label>
        <input type="mail" name="email" />
        <label for="password">Hasło</label>
        <input type="password" name="password" />
        </div>
    </form>
    <div class="login__links">
    <ul className="login-nav">
    <li><Link to="/zaloz-konto">Załóż konto</Link></li>
                        <li><Link to="/zaloguj">Zaloguj się</Link></li>
                        
                    </ul>
    </div>

            </div>
            </>
        )
    }
}

export default Login;