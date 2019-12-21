import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import './HomeContact.scss';

class HomeContact extends Component {
    render() {
        return (
            <div className="contact__container" id="contactID">
                <div className="contact__photo"></div>
                <div className="contact__form">
                    <div className="contact-header">
                        <h2>Skontaktuj się z nami</h2>
                        <div className="header-divider"></div>
                    </div>
                    <form>
                        <div className="form-inputs">
                            <div className="name-input">
                                <label>Wpisz swoje imię</label>
                                <input type="text" name="name" />
                            </div>
                            <div className="name-input">
                            <label>Wpisz swój e-mail</label>
                            <input type="mail" name="mail" />
                            </div>
                        </div>
                        <div className="form-message">
                        <label>Wpisz swoją wiadomość</label>
                            <input type="textarea" name="name" />
                        </div>
                    </form>
                    <Link to="/">Wyślij wiadomość</Link>
                </div>
            </div>
        )
    }
}

export default HomeContact;
