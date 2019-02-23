import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../components/Header';
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container ui">
                <Header/>
                <Route path="/" exact component={StreamList} />
                <Route path="/create" component={StreamCreate} />
            </div>
        </BrowserRouter>
    )
};

export default App;