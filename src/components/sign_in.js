import React, {Component} from 'react';
import Field from './field';
import {connect} from 'react-redux';
import {formError, signIn} from '../actions';

class SignIn extends Component {
    handleSignIn(event){
        event.preventDefault();

        const {email, password} = this.props.values;
        const errors = [];

        if(!email){
            errors.push('Please enter an email');
        }

        if(!password){
            errors.push('Please enter a password')

        }

    
        this.props.formError(errors);

        if(errors.length === 0){
            this.props.signIn({email, password});
        }
        
    }
    render(){
        const inputs = [
            {
            label: 'Email Address',
            type: 'text',
            placeholder: 'Enter your Email',
            name: 'email'
        },
        {
            label: 'Password',
            type: 'password',
            placeholder: 'Enter your password',
            name: 'password'
        }
    
    ];

    const {values, errors} = this.props;

    console.log('ERRORS', errors);

    const fields = inputs.map((field,index) => {
        return <Field key={index} {...field} value={values[field.name] || ''}/>
    });
        return(
        <div>    
            <h1 className="text-center mb-3">Sign In</h1>
            <div className="row justify-content-center">
                 <div className="card col-8">
                    <div className="card-body">
                    <form onSubmit={this.handleSignIn.bind(this)}>
                       {fields}
                       <div className="row">
                        <button className="btn btn-light">Sign In</button>
                       </div>
                    </form>  
                    </div>
              </div>  
            </div>
        </div>    
        );
    }
}

function mapStateToProps(state){
    return{
        values: state.form.values,
        errors: state.form.errors
    }
}

export default connect(mapStateToProps, {formError, signIn})(SignIn);