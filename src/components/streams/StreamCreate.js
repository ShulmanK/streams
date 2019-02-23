import React, {Component} from 'react';
import {createStream} from "../../actions";

import {connect} from 'react-redux';


import {Field, reduxForm} from 'redux-form'


class StreamCreate extends Component {
    renderInput({label, input, meta}) {
        // console.log(meta)


        return <div className="field">
            <label>{label}</label>
            <input {...input}/>
            {meta.touched && meta.error ? <p>{meta.error}</p> : null}
        </div>


    }

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.createStream(formValues);
    };


    render() {
        const {props} = this
        console.log(props)
        return <div>
            <form className="form ui" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        </div>
    }
}

const validateFunction = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }

    return errors

};



const StreamCreateRF =  reduxForm({
    form: 'streamCreate',
    validate: validateFunction,
})(StreamCreate);

export default connect(null, {createStream})(StreamCreateRF);



