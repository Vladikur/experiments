import React, { useState }  from 'react';

function Calculator() {

  const [displayValue, setDisplayValue] = useState('0')

  function changeDisplayValue (e) {
    const { name } = e.target
    if (displayValue === "0") {
      setDisplayValue(name)
    } else if (displayValue.length === 8) {
      setDisplayValue(displayValue)
    } else {
      setDisplayValue(displayValue + name)
    }
  }

  function resetDisplayValue () {
    setDisplayValue("0")
  }

  function plusOrMinus () {
    if (displayValue.length === 8 || displayValue === "0") {
      setDisplayValue(displayValue)
    } else if(displayValue.includes('-')) {
      setDisplayValue(displayValue.substr(1))
    } else {
      setDisplayValue('-' + displayValue)
    }
  }

  return (
    <div className="calculator">
      <div className="calculator__screen">
        <span className="calculator__screen-info">{displayValue}</span>
      </div>
      <div className="calculator__buttons">
        <button onClick={resetDisplayValue} name="AC" className="calculator__button" type="button">AC</button>
        <button onClick={plusOrMinus} name="plus or minus" className="calculator__button" type="button">􀅺</button>
        <button name="percent" className="calculator__button" type="button">􀘾</button>
        <button name="division" className="calculator__button" type="button">􀅿</button>
        <button onClick={changeDisplayValue} name="7" className="calculator__button" type="button">7</button>
        <button onClick={changeDisplayValue} name="8" className="calculator__button" type="button">8</button>
        <button onClick={changeDisplayValue} name="9" className="calculator__button" type="button">9</button>
        <button name="multiplication" className="calculator__button" type="button">􀅾</button>
        <button onClick={changeDisplayValue} name="4" className="calculator__button" type="button">4</button>
        <button onClick={changeDisplayValue} name="5" className="calculator__button" type="button">5</button>
        <button onClick={changeDisplayValue} name="6" className="calculator__button" type="button">6</button>
        <button name="subtraction" className="calculator__button" type="button">􀅽</button>
        <button onClick={changeDisplayValue} name="1" className="calculator__button" type="button">1</button>
        <button onClick={changeDisplayValue} name="2" className="calculator__button" type="button">2</button>
        <button onClick={changeDisplayValue} name="3" className="calculator__button" type="button">3</button>
        <button name="addition" className="calculator__button" type="button">􀅼</button>
        <button onClick={changeDisplayValue} name="0" className="calculator__button calculator__button_type_zero" type="button">0</button>
        <button onClick={changeDisplayValue} name="." className="calculator__button" type="button">,</button>
        <button name="equals" className="calculator__button calculator__button_type_equals" type="button">􀆀</button>
      </div>
    </div>
  );
}

export default Calculator;
