import React from 'react';
import Home from './home';
import fireApp from './fireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './login';
import Register from './register';
import Services from './services';
import Contact from './contact';
import Schedule from './schedule';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function App() {
  const [user] = useAuthState(fireApp.auth());
  return (
    <div className="App">
      <Router>
        <nav>
          <div>
            <h1>
              <NavLink to="/">HOME</NavLink>
            </h1>
          </div>
          <div>
            <h1>
              <NavLink to="/services">SERVICES</NavLink>
            </h1>
          </div>
          <div>
            <h1>
              <NavLink to="/contact">CONTACT US</NavLink>
            </h1>
          </div>
          <div>
            <h1>
              <NavLink to="/schedule">BOOK NOW</NavLink>
            </h1>
          </div>
          <div>
            <h1>
              <NavLink to="/login">{user ? 'LOGOUT' : 'LOGIN'}</NavLink>
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
