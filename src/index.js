import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const app = <Router>
  <div>
    <Route exact path="/" component={App} />
  </div>
</Router>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
