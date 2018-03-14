import React, { Component } from 'react';
import './App.css';

import API from './lib/API';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dogs: []
    };
  }

  async componentDidMount() {
    const dogs = await API.getAll();
    console.log(dogs);
    this.setState({
      dogs
    });
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Barkwire</a>
          </nav>
        </header>
        <main className="container">
          <section className="row">
            {this.state.dogs.map(dog => {
              return (
                <div className="card col-sm-4" key={dog.id}>
                  <img className="card-img-top" src={dog.imageUrl} alt={dog.name} />
                  <div className="card-body">
                    <h5 className="card-title">{dog.name}</h5>
                    <p className="card-text">{dog.description}</p>
                    <a href="#" className="btn btn-primary">{dog.imageCaption}</a>
                  </div>
                </div>
              )
            })}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
