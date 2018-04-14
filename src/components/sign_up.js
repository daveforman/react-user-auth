import React, {Component} from 'react';
import Field from './field';
import {connect} from 'react-redux';
import {formError, signUp} from '../actions';

class SignUp extends Component {
    handleSignUp(event){
        event.preventDefault();

        const {email, password, confirmPassword} = this.props.values;
        const errors = [];

        if(!email){
            errors.push('Please enter an email');
        }

        if(!password){
            errors.push('Please enter a password')

        }

        if(password !== confirmPassword){
            errors.push('Passwords do not match');
        }    

        this.props.formError(errors);

        if(errors.length === 0){
            this.props.signUp({email, password});
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
            placeholder: 'Choose a password',
            name: 'password'
        },
        {
            label: 'Confirm Password',
            type: 'password',
            placeholder: 'Confirm your password',
            name: 'confirmPassword'

        }
    
    ];

    const {values, errors} = this.props;

    console.log('ERRORS', errors);

    const fields = inputs.map((field,index) => {
        return <Field key={index} {...field} value={values[field.name] || ''}/>
    });
        return(
        <div>    
            <h1 className="text-center mb-3">Sign Up</h1>
            <div className="row justify-content-center">
                 <div className="card col-8">
                    <div className="card-body">
                    <form onSubmit={this.handleSignUp.bind(this)}>
                       {fields}
                       <div className="row">
                        <button className="btn btn-light">Sign Up</button>
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

export default connect(mapStateToProps, {formError, signUp})(SignUp);