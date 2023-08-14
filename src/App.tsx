import React, {useState} from 'react';
import BreadTop from './components/breadTop';
import BreadBottom from './components/BreadBottom';
import Tomato from './components/tomato';
import Lattice from './components/lattice';
import Meat from './components/Meat';
import Controls from './components/Controls';

import './App.css';

//Adding types to
interface Fillings {
  tomato: boolean;
  lattice: boolean;
  meat: boolean;
}

function App() {
  // Create a state that manages if the filling is true or false
  const [fillings, setFillings] = useState<Fillings>({
    tomato: false,
    lattice: false,
    meat: false,
  });

  //Function to toggle the feeling 
  const toggleFilling = (filling: keyof Fillings) => {
    setFillings((prevFillings) => ({
      ...prevFillings,
      [filling]: !prevFillings[filling],
    }));
  };
  
  return (
    <div className="App">
      <div className="container">
        <div className="content-header">
          <h1>ACA Burger</h1>
        </div>
        <div className="content-body">
          <div className='burger'>
            <BreadTop/>
            {/* Use the state to not show feeling if false */}
            {fillings.tomato && <Tomato/>}
            {fillings.meat && <Meat/>}
            {fillings.lattice && <Lattice/>}
            <BreadBottom/>
          </div>
          {/* Fillings are passed into the controls to toggle fillings */}
        <Controls fillings={fillings} toggleFilling={toggleFilling} />
        </div>
      </div>
    </div>
  );
}

export default App;
