import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, addNewObject] = useState({ total: null, next: null, operation: null });

  const result = (event) => {
    const newObject = calculate(obj, event.target.textContent);
    addNewObject(newObject);
  };
  return (
    <>
      <div>
        <div className="container">
          <form>
            <input type="text" value={obj.next || obj.total || 0} />
          </form>
          <div className="keypad">
            <button type="button" className="button" onClick={result} id="clr">Clear</button>
            <button type="button" className="button" onClick={result} id="lite">C</button>
            <button type="button" className="button" onClick={result} id="lite">&divide;</button>
            <button type="button" className="button" onClick={result}>7</button>
            <button type="button" className="button" onClick={result}>8</button>
            <button type="button" className="button" onClick={result}>9</button>
            <button type="button" className="button operation_button" onClick={result} id="lite">x</button>
            <button type="button" className="button" onClick={result}>4</button>
            <button type="button" className="button" onClick={result}>5</button>
            <button type="button" className="button" onClick={result}>6</button>
            <button type="button" className="button operation_button" onClick={result} id="lite">-</button>
            <button type="button" className="button" onClick={result}>1</button>
            <button type="button" className="button" onClick={result}>2</button>
            <button type="button" className="button" onClick={result}>3</button>
            <button type="button" className="button operation_button" onClick={result} id="lite">+</button>
            <button type="button" className="button" onClick={result}>0</button>
            <button type="button" className="button" onClick={result} id="lite">.</button>
            <button type="button" className="button operation_button" onClick={result} id="equal">=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
