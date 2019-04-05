import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: '425396643375-giulmbe2di1mlvpefacn5pu5td17dfh5.apps.googleusercontent.com',
                scope: 'email',
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.changeAuth(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.changeAuth)
            })
        })
    }
    changeAuth = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    };
    signInClick = () =>{
        this.auth.signIn();
    };
    signOutClick = () =>{
        this.auth.signOut()
    };

    renderButton = () => {
        if (this.props.isSignedIn === null){
            return null
        } else if (this.props.isSignedIn){
            return <button onClick={this.signOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
            </button>
        } else {
            return <button onClick={this.signInClick} className="ui red google button">
                <i className="google icon" />
                Sign In
            </button>
        }
    };

    render(){
        return <div>{this.renderButton()}</div>
    }
};

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};

export default  connect(
    mapStateToProps,
    {signIn, signOut}
)(GoogleAuth);