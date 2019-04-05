import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return <div>
        <div className="ui menu">
            <Link to="/" className="item">
                Home
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All streams
                </Link>
                <div className="item"><GoogleAuth/></div>

            </div>
        </div>
    </div>
};

export default Header;