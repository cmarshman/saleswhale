import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import './design/App.css';
import Home from './pages/Home';
import Company from './pages/Company';
import Product from './pages/Product';
import Why from './pages/Why';
import Login from './pages/Login';
import GetADemo from './pages/GetADemo';

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
            <Route exact path="/login" component={Login}/>
            <Route exact path="/demo" component={GetADemo}/>
          </Wrapper>
        </div>
      </Router>
    </>
  );
}

export default App;   
