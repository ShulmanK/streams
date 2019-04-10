import React, {Component} from 'react';
import Modal from "../Modal";
import history from "../../history";
import {Link} from "react-router-dom";
import {deleteStream, fetchStream} from "../../actions";
import {connect} from "react-redux";


class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onDelete = () => {
        this.props.deleteStream(this.props.match.params.id)
    };
    ;

    render() {
        const action = (
            <React.Fragment>
                <div onClick={this.onDelete} className="ui negative button">Delete</div>
                <Link to={"/"} className="ui button">Cancel</Link>
            </React.Fragment>
        );
        return this.props.stream ? <div>
            <Modal
                header="Delete Stream"
                action={action}
                content={`Are you sure you want to delete the stream with title: ${this.props.stream.title}`}
                onDismiss={() => history.push("/")}
            />
        </div> : <div>
            <Modal
                header="Delete Stream"
                action={action}
                content="Are you sure you want to delete the stream with "
                onDismiss={() => history.push("/")}
            />
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchStream, deleteStream})

(
    StreamDelete
)