import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Login from './features/Login';
import Register from './features/Register';
import Home from './features/Home';
import './App.css';
import {
  // BrowserRouter as Router,
  Router,
  Switch,
  Route,
  Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import { createBrowserHistory } from "history";
import PrivateRoute from './utils/PrivateRoute'

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <div>
          {/* <AuthButton /> */}

          <ul>
            <li>
              <Link to="/login">Login Page</Link>
            </li>
            <li>
              <Link to="/register">Register Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/* <Route path="/home">
              <Home />
            </Route> */}
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
