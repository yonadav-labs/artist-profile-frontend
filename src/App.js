import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import './css/bootstrap.min.css'
import './css/reset.css'
import './css/animate.min.css'
import './css/style.css'
import './css/alertify.min.css'
import './css/main.css'
import ErrorBoundary from "./components/ErrorBoundary";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams
} from "react-router-dom";


function App() {
  return (
    <div className="App">

        <ErrorBoundary>
            <Router>
                  <Switch>
                    <Route path="/gallery/:id" render={(props) => <Gallery {...props} />}/>
                    <Route path="/" component={Home}/>
                  </Switch>
            </Router>
         </ErrorBoundary>
    </div>
  );
}

export default App;
