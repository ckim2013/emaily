import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'; // could have tacked on React to StripeCheckout but meh

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={ 500 }
        token={ token => console.log(token) }
        stripeKey={ process.env.REACT_APP_STRIPE_KEY }
      />
    );
  }
}

// token is poorly named! It takes in a callback!

export default Payments;
