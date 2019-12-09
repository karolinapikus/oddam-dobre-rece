import React, {Component} from 'react';
import './HomeThreeColumns.scss';

class HomeThreeColumns extends Component {
    render(){
        return (
            <div className="three__columns">
                <div className="column">
                    <h2>10</h2>
                    <h3>Oddanych worków</h3>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div className="column">
                <h2>5</h2>
                    <h3>Wspartych organizacji</h3>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

                </div>
                <div className="column">
                <h2>7</h2>
                    <h3>Zorganizowanych zbiórek</h3>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

                </div>
            </div>
        )
    }
}

export default HomeThreeColumns