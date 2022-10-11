import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [calculate, setCalculate] = useState("");

  const handleClick = (e) => {
    // console.log(e.target.value);
    setCalculate(calculate.concat(e.target.value));
  }

  const equal = () => {
    try {
      setCalculate((eval(calculate.toString())).toString());
    } catch (error) {
      setCalculate("Error");
    }
  }

  const clear = () => {
    setCalculate("");
  }

  const del = () => {
    setCalculate(calculate.slice(0, -1));
  }

  const pi = (e) => {
    setCalculate(calculate * 3.141592653589793238);
  }

  const sqrtRoot = () => {
    setCalculate(Math.sqrt(calculate));
  }

  const cubeRoot = () => {
    setCalculate(Math.cbrt(calculate));
  }

  const pow = () => {
    setCalculate(Math.pow(calculate, 2));
  }

  const log = () => {
    setCalculate(Math.log10(calculate));
  }

  const ln = () => {
    setCalculate(Math.log(calculate));
  }

  const e = () => {
    setCalculate(2.718281828459045 * (calculate));
  }

  const rad = () => {
    setCalculate(calculate * (3.141592653589793238 / 180));
  }

  const cos = () => {
    setCalculate(Math.cos(calculate));
  }

  const sin = () => {
    setCalculate(Math.sin(calculate));
  }

  const tan = () => {
    setCalculate(Math.tan(calculate));
  }

  const factorial = () => {
    let num = calculate;
    // console.log(calculate);
    let facto = 1;
    for (let i = num; i > 0; i--) {
      facto = facto * i;
    }
    setCalculate(facto);
    // console.log(facto);
  }

  return (
    <>
      <form name="calculator" className='container'>
        <table className='table'>
          <thead>
            <tr>
              <td colSpan="7"><input type="text" value={calculate} className="display" /></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button type="button" value="clear" onClick={clear}>C</button></td>
              <td><button type="button" value="(" onClick={handleClick}>(</button></td>
              <td><button type="button" value=")" onClick={handleClick}>)</button></td>
              <td><button type="button" value="del" onClick={del}>Del</button></td>
              <td><button type="button" value="%" onClick={handleClick}>%</button></td>
              <td><button type="button" value="x!" onClick={factorial}>x!</button></td>
              <td><button type="button" value="x^2" onClick={pow}>x<sup>2</sup></button></td>
            </tr>
            <tr>
              <td><button type="button" value="7" onClick={handleClick}>7</button></td>
              <td><button type="button" value="8" onClick={handleClick}>8</button></td>
              <td><button type="button" value="9" onClick={handleClick}>9</button></td>
              <td><button type="button" value="*" onClick={handleClick}>*</button></td>
              <td><button type="button" value="/" onClick={handleClick}>/</button></td>
              <td><button type="button" value="ln" onClick={ln}>ln</button></td>
              <td><button type="button" value="e" onClick={e}>e</button></td>
            </tr>
            <tr>
              <td><button type="button" value="4" onClick={handleClick}>4</button></td>
              <td><button type="button" value="5" onClick={handleClick}>5</button></td>
              <td><button type="button" value="6" onClick={handleClick}>6</button></td>
              <td><button type="button" value="+" onClick={handleClick}>+</button></td>
              <td><button type="button" value="C" onClick={handleClick}>x^</button></td>
              <td><button type="button" value="log" onClick={log}>log</button></td>
              <td><button type="button" value="cos" onClick={cos}>cos</button></td>
            </tr>
            <tr>
              <td><button type="button" value="1" onClick={handleClick}>1</button></td>
              <td><button type="button" value="2" onClick={handleClick}>2</button></td>
              <td><button type="button" value="3" onClick={handleClick}>3</button></td>
              <td><button type="button" value="-" onClick={handleClick}>-</button></td>
              <td><button type="button" value="sqrt2" onClick={sqrtRoot}>&radic;</button></td>
              <td><button type="button" value="sin" onClick={sin}>sin</button></td>
              <td><button type="button" value="tan" onClick={tan}>tan</button></td>
            </tr>
            <tr>
              <td><button type="button" value="sqrt3" onClick={cubeRoot}>&#8731;</button></td>
              <td><button type="button" value="0" onClick={handleClick}>0</button></td>
              <td><button type="button" value="." onClick={handleClick}>.</button></td>
              <td><button type="button" value="=" onClick={equal}>=</button></td>
              <td><button type="button" value="pi" onClick={pi}>pi</button></td>
              <td><button type="button" value="00" onClick={handleClick}>00</button></td>
              <td><button type="button" value="rad" onClick={rad}>rad</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  )
}