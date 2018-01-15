import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'; // could have tacked on React to StripeCheckout but meh
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name='Emaily'
        description='$5 for 5 email credits'
        amount={ 500 }
        token={ token => this.props.handleToken(token) }
        stripeKey={ process.env.REACT_APP_STRIPE_KEY }
      >
        <button className='btn'>
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

// token is poorly named! It takes in a callback which our backend will use
// to confirm payment!

export default connect(null, actions)(Payments);
