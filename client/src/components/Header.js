import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href='/auth/google'>Login with Google</a></li>;
      default:
        return <li><a>Log out</a></li>;
    }
  }

  render() {
    console.log('header props', this.props);
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='left brand-logo'>
            Emaily
          </a>
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
