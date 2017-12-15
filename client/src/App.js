import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={ logo } className='App-logo' alt='logo' />
          <h2 className='App-title'>Welcome to Emaily</h2>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href='/auth/google'>Sign in with Google</a>
      </div>
    );
  }
}

export default App;

// In the development world, the proxy makes it so that when I send a request
// from localhost:3000, the browser thinks its sending it to the same server
// but the proxy takes that and forwards it to localhost:5000. This way, we
// can persist our cookies in our requests and not get CORS issues. 3000 has
// the react portion and 5000 is the backend for our dev.
