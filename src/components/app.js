import React from 'react';
import Home from './home';
import Login from './login';
import Register from './register';
import Services from './services';
import Contact from './contact';
import Schedule from './schedule';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div>
            <h1>
              <Link to="/">HOME</Link>
            </h1>
          </div>
          <div>
            <h1>
              <Link to="/services">SERVICES</Link>
            </h1>
          </div>
          <div>
            <h1>
              <Link to="/contact">CONTACT US</Link>
            </h1>
          </div>
          <div>
            <h1>
              <Link to="/schedule">BOOK NOW</Link>
            </h1>
          </div>
          <div>
            <h1>
              <Link to="/login">LOGIN</Link>
            </h1>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/schedule" component={Schedule} />

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
