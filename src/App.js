import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import './design/App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Home}/>
          </Wrapper>
        </div>
      </Router>
    </>
  );
}

export default App;   
