import React from 'react';
import {fetchStreams} from "../../actions";
import {connect} from 'react-redux';


class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();

    }

    renderList = () => {
        console.log(this.props);
        return this.props.streams.map(stream => {
            return <div className="item" key={stream.id}>
                <i className="large middle aligned icon camera"/>
                <div className="content">
                    {stream.title}
                <div className="description">{stream.description}</div>

                </div>

            </div>
        })

    };

    render() {

        return <div><h2>Stream Create</h2>
            <div className="ui celled list">{this.renderList()}</div>
        </div>
    }


};

function mapStateToProps(state) {
    return {
        streams: Object.values(state.streams),
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);