import React from 'react';
import ReactDOM from 'react-dom';
import Index from './views/Index';
import { default as Details } from './views/DetailsView';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return <Router>
    <div>
      <Route exact path="/" component={ Index } />
      <Route path="/event/:id" component={ Details } />
    </div>
  </Router>
}

ReactDOM.render(<App />, document.getElementById('root'));