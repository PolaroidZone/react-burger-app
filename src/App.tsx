import React from 'react';
import BreadTop from './components/breadTop';
import BreadBottom from './components/BreadBottom';
import Tomato from './components/tomato';
import Lattice from './components/lattice';
import Meat from './components/Meat';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content-header">
          <h1>ACA Burger</h1>
        </div>
        <div className="content-body">
          <BreadTop/>
          <Tomato/>
          <Meat/>
          <Lattice/>
          <BreadBottom/>
        </div>
      </div>
    </div>
  );
}

export default App;
