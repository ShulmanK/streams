import React from 'react';
import {Router, Route} from 'react-router-dom';
import Header from '../components/Header';
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import history from "../history";


const App = () => {
    return (
        <Router history={history}>
            <div className="container ui">
                <Header/>
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" component={StreamCreate} />
                <Route path="/streams/edit/:id" component={StreamEdit} />
                <Route path="/streams/delete/:id" component={StreamDelete} />
                <Route path="/streams/show" component={StreamShow} />
            </div>
        </Router>
    )
};

export default App;