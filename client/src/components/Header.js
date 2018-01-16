import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.renderContent = this.renderContent.bind(this);
  // }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href='/auth/google'>Login with Google</a></li>;
      default:
        return [
          <li key='1'><Payments /></li>,
          <li key='2'
              style={ { margin: '0 10px' } }
          >
            Credits: { this.props.auth.credits }
          </li>,
          <li key='3'><a href='/api/logout'>Log out</a></li>
        ];

    }
  }

  render() {
    // console.log('header props', this.props);

    // Using an anchor tag rather than a Link will refresh the page
    // which doesn't look good.
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to={ this.props.auth ? '/surveys' : '/' }
                className='left brand-logo'>
            Emaily
          </Link>
          <ul className='right'>
            { this.renderContent() }
          </ul>
        </div>
      </nav>
    );
  }
}

// const mapStateToProps = state => ({
//   auth: state.auth
// });
// or
// function mapStateToProps(state) {
//   return { auth: state.auth };
// }
// or es6
function mapStateToProps({ auth }) {
  return { auth };
}


export default connect(mapStateToProps, null)(Header);
