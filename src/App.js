import React from 'react';
import './App.css';
import Login from './login';
import Register from './register';
import Services from './services';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/services" component={Services} />

          <Route
            component={() => (
              <div>
                <h1>BAD DOG</h1>
                We're sorry friend. Fur real.
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
