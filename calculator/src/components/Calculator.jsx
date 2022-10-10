import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [calculate, setCalculate] = useState("");

  const handleClick = (e) => {
    console.log(e.target.value);
    setCalculate(calculate.concat(e.target.value));
  }

  const equal = () => {
    try {
      setCalculate(eval(calculate).toString());
    } catch (err) {
      setCalculate("Error");
    }
  }

  const clear = () => {
    setCalculate("");
  }

  const pi = (e) =>{
    setCalculate(calculate*3.141592653589793238)
  }


  const del = () => {
    setCalculate(calculate.slice(0, -1));
  }

  return (
    <>
      <form name="calculator">
        <table id="table">
          <thead>
            <tr>
              <td colSpan="7"><input type="text" value={calculate} id="display" /></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button type="button" value="clear" onClick={clear}>C</button></td>
              <td><button type="button" value="(" onClick={handleClick}>(</button></td>
              <td><button type="button" value=")" onClick={handleClick}>)</button></td>
              <td><button type="button" value="del" onClick={del}>Del</button></td>
              <td><button type="button" value="%" onClick={handleClick}>%</button></td>
              <td><button type="button" value="x!" onClick="fact(value)">x!</button></td>
              <td><button type="button" value="x^2" onClick="square()">x<sup>2</sup></button></td>
            </tr>
            <tr>
              <td><button type="button" value="7" onClick={handleClick}>7</button></td>
              <td><button type="button" value="8" onClick={handleClick}>8</button></td>
              <td><button type="button" value="9" onClick={handleClick}>9</button></td>
              <td><button type="button" value="*" onClick={handleClick}>*</button></td>
              <td><button type="button" value="/" onClick={handleClick}>/</button></td>
              <td><button type="button" value="ln" onClick="ln()">ln</button></td>
              <td><button type="button" value="e" onClick="e()">e</button></td>
            </tr>
            <tr>
              <td><button type="button" value="4" onClick={handleClick}>4</button></td>
              <td><button type="button" value="5" onClick={handleClick}>5</button></td>
              <td><button type="button" value="6" onClick={handleClick}>6</button></td>
              <td><button type="button" value="+" onClick={handleClick}>+</button></td>
              <td><button type="button" value="C" onClick={handleClick}>x^</button></td>
              <td><button type="button" value="log" onClick="log()">log</button></td>
              <td><button type="button" value="cos" onClick="cos()">cos</button></td>
            </tr>
            <tr>
              <td><button type="button" value="1" onClick={handleClick}>1</button></td>
              <td><button type="button" value="2" onClick={handleClick}>2</button></td>
              <td><button type="button" value="3" onClick={handleClick}>3</button></td>
              <td><button type="button" value="-" onClick={handleClick}>-</button></td>
              <td><button type="button" value="sqrt2" onClick="sqrt2()">&radic;</button></td>
              <td><button type="button" value="sin" onClick="sin()">sin</button></td>
              <td><button type="button" value="tan" onClick="tan()">tan</button></td>
            </tr>
            <tr>
              <td><button type="button" value="sqrt3" onClick="sqrt3()">&#8731;</button></td>
              <td><button type="button" value="0" onClick={handleClick}>0</button></td>
              <td><button type="button" value="." onClick={handleClick}>.</button></td>
              <td><button type="button" value="=" onClick={equal}>=</button></td>
              <td><button type="button" value="pi" onClick={pi}>pi</button></td>
              <td><button type="button" value="00" onClick={handleClick}>00</button></td>
              <td><button type="button" value="rad" onClick="rad()">rad</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  )
}
