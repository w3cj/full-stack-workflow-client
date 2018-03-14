import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Barkwire</a>
          </nav>
        </header>
        <main class="container">
          <h2>Show Dogs Here</h2>
        </main>
      </div>
    );
  }
}

export default App;
