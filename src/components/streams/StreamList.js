import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return <div key={stream.id} className="item">
                {this.renderAdmin(stream)}
                <i className="large middle aligned icon camera"/>
                <div className="content"> {stream.title}
                    <div className="description">{stream.description}</div>
                </div>
            </div>
        })
    };

    renderAdmin = (stream) => {
        if (this.props.userId === stream.userId) {
            return <div className="right floated content">
                <Link to={`/streams/edit/${stream.id}`} className="ui button primary">EDIT</Link>
                <Link to={`/streams/delete/${stream.id}`} className="ui button negative">DELETE</Link>
            </div>
        }
    };

    renderCreate = () => {
        if (this.props.isSignedIn) {
            return <div style={{textAlign: 'right', marginTop: "20px"}}>
                <Link to="streams/new" className="ui button primary">Create Stream</Link>
            </div>
        }
    };

    render() {
        return (
            <div><h1>Stream List</h1>
                <div className="ui celled list">{this.renderList()}
                    {this.renderCreate()}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        userId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);