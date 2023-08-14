import React, { useState } from 'react';
import '../styles/Controlls.css'


interface ControlsProps {//Adding types to stop the the type error
  fillings: {
    tomato: boolean;
    lattice: boolean;
    meat: boolean;
  };
  toggleFilling: (filling: keyof ControlsProps['fillings']) => void;
}
//Props a paased in to control the state of each of the button
export default function Controls({ fillings, toggleFilling }: ControlsProps) {

  return (
    <div className='controls'>
      <div className="controll-header">
        <h2>How do you like your Burger?</h2>
      </div>
       {/* if tomato button is clicked it toggles to tomato properties*/}
      <div className="controllers" onClick={() => toggleFilling('tomato')}> 
        <p>
          Tomato {fillings.tomato ? '(Added)' : ''}
        </p>
      </div>
      
      <div className="controllers" onClick={() => toggleFilling('meat')}>
        <p>
          Meat {fillings.meat ? '(Added)' : ''}
        </p>
      </div>
      <div className="controllers" onClick={() => toggleFilling('lattice')}>
        <p>
          Lattice {fillings.lattice ? '(Added)' : ''}
        </p>
      </div>
    </div>
  )
}
