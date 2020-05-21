import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/wrapper';
import './design/App.css';
import Home from './pages/Home';
import Company from './pages/Company';
import Product from './pages/Product';
import Why from './pages/Why';

function App() {
  return (
    <>
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Home}/>
            <Route exact path="/why" component={Why}/>
            <Route exact path="/product" component={Product}/>
            <Route exact path="/company" component={Company}/>
          </Wrapper>
        </div>
      </Router>
    </>
  );
}

export default App;
