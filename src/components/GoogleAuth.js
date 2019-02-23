import React from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

// import

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "425396643375-giulmbe2di1mlvpefacn5pu5td17dfh5.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // Для того чтобы задать state
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }
// Включаем actions => меняем state
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
            console.log("Listener change true")

        } else {
            this.props.signOut();
            console.log("Listener change false")
        }
    };
    signIn = (e) => {
        e.preventDefault()
        this.auth.signIn()
    };


    signOut = (e) => {
        e.preventDefault()
        this.auth.signOut()
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (<button onClick={this.signOut} className="ui google plus button">
                <i className="google icon"></i>
                Sign Out
            </button>)
        } else {
            return (<button onClick={this.signIn} className="ui google plus button">
                <i className="google icon"></i>
                Sign in with Google
            </button>)
        }
    };

    render() {
        return <div>
            {this.renderAuthButton()}
        </div>
    }
};

function mapStateToProps(state) {
    return {
        isSignedIn: state.auth.IsSignedIn,
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);