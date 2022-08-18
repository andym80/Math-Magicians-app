import './App.css';
import React from 'react';
import Calculator from './components/calculator';

const App = () => (
  <>
    <div>
      <div className="container">
        <form>
          <input type="text" value={0} />
        </form>
        <div className="keypad">

          <button type="button" id="clr">Clear</button>
          <button type="button" id="lite">C</button>
          <button type="button" id="lite">&divide;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" id="lite">&times;</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" id="lite">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" id="lite">+</button>
          <button type="button">0</button>
          <button type="button" id="lite">.</button>
          <button type="button" id="equal">=</button>
        </div>
      </div>
    </div>
  </>
);
Calculator.defaultValue = {};
export default App;
