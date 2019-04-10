import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {
    renderErrorMessage = (meta) => {
        if (meta.touched && !meta.active && meta.error) {
            return <div style={{color: 'red'}}>{meta.error}</div>
        }
    };

    renderInput = (formProps) => {
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input}/>
                <div>{this.renderErrorMessage(formProps.meta)}</div>
            </div>
        )
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="title" component={this.renderInput} label='Enter title'/>
            <Field name="description" component={this.renderInput} label='Enter description'/>
            <button className="ui primary button">Submit</button>
        </form>
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "Enter a title!"
    }
    if (!formValues.description) {
        errors.description = "Enter a description!"
    }
    return errors;

};

export default reduxForm({form: 'StreamForm', validate})(StreamForm);

