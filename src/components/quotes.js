import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuote} from '../actions'

class Quotes extends Component{
    componentDidMount(){
        this.props.getQuote()
    }

    render(){
        return(
            <div>
                <h1 className="text-center">Movie Quote</h1>
                <h5 className="text-center">{this.props.quote}</h5>
            
            </div>    
        )
    }
}

function mstp(state){
    return {
        quote: state.user.quote
    };
}


export default connect(mstp, {getQuote})(Quotes);