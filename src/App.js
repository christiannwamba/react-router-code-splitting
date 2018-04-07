import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Spinner from 'react-spinkit';
import { Route, Switch, Link } from 'react-router-dom';

// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

import logo from './logo.svg';
import './App.css';

const Loading = () => <Spinner name="double-bounce" />;

const Home = Loadable({
  loader: () => import('./Home'),
  loading: () => Loading
});

const About = Loadable({
  loader: () => import('./About'),
  loading: () => Loading
});

const Contact = Loadable({
  loader: () => import('./Contact'),
  loading: () => Loading
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link>
        </p>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
