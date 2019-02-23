import React from 'react';
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return <div>
        <div className="ui menu">
            <a href="/" className="item">
                Home
            </a>
            <a href="/" className="item">
                Messages
            </a>
            <a href="/" className="item">
                Friends
            </a>
            <div className="right menu">
                <a href="/" className="item">
                    <GoogleAuth/>
                </a>
            </div>
        </div>
    </div>
};

export default Header;