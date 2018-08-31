import React from 'react';
import ReactDOM from 'react-dom';
import Index from './views/Index';
import { default as Details } from './views/DetailsView';
import { default as Create } from './views/CreateView';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return <Router>
    <div>
      <Route exact path="/" component={ Index } />
      <Route path="/event/:id" component={ Details } />
      <Route path="/create" component={ Create } />
    </div>
  </Router>
}

ReactDOM.render(<App />, document.getElementById('root'));