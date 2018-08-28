import React from 'react';
import ReactDOM from 'react-dom';
import Index from './views/Index';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return <Router>
    <div>
      <Route exact path="/" component={ Index } />
    </div>
  </Router>
}

ReactDOM.render(<App />, document.getElementById('root'));