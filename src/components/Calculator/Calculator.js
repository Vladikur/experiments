import React, { useState }  from 'react';

function Calculator() {

  const [displayValue, setDisplayValue] = useState("0")
  const [secondValue, setSecondValue] = useState("0")
  const [currentOperation, setCurrentOperation] = useState("none")
  const [lastOperation, setLastOperation] = useState("none")
  const [newNumber, setNewNumber] = useState(false)

  function changeDisplayValue (e) {

    const { name } = e.target

    if (newNumber) {
      setDisplayValue(name)
      setNewNumber(false)
    } else if (displayValue === "0" && name !== "." && name !== "0") {
      setDisplayValue(name)
    } else if (displayValue === "0" && name === "0") {
      setDisplayValue(displayValue + '.' + name)
    } else if (displayValue === "0" && name === ".") {
      setDisplayValue('0' + name)
    } else if (displayValue.includes('.') && name === ".") {
      setDisplayValue(displayValue)
    } else if (displayValue.length === 8) {
      setDisplayValue(displayValue)
    } else {
      setDisplayValue(displayValue + name)
    }
  }

  function resetDisplayValue () {
    setDisplayValue("0")
    setSecondValue("0")
    setNewNumber(false)
    setCurrentOperation("none")
    setLastOperation("none")
  }

  function plusOrMinus () {
    if ((displayValue.length === 8 || displayValue === "0") && !displayValue.includes('-')) {
      setDisplayValue(displayValue)
    } else if(displayValue.includes('-')) {
      setDisplayValue(displayValue.substr(1))
    } else {
      setDisplayValue('-' + displayValue)
    }
  }

  function operationSymbol (e) {
    const { name } = e.target
    setCurrentOperation(name)
    setNewNumber(true)
    setSecondValue(displayValue)
  }

  function percentOperation () {
    if (secondValue !== 0) {
      const displayNumber = Number(displayValue)
      const hundredPercent = Number(secondValue)
      const result = (hundredPercent / 100) * displayNumber
      setDisplayValue(result)
    }
  }

  function doOperation (operation, firstNumber, secondNumber) {
    if (operation === "division") {
      return firstNumber / secondNumber
    }
    if (operation === "multiplication") {
      return firstNumber * secondNumber
    }
    if (operation === "addition") {
      return firstNumber + secondNumber
    }
    if (operation === "subtraction") {
      return firstNumber - secondNumber
    }
    if (operation === "none") {
      return 0
    }
  }

  function toString (number) {
    const string = String(number)
    if (string.length > 8) {
      return string.substr(0, 8)
    } else {
      return string
    }
  }

  function equalsOperation () {

    let result 

    if (currentOperation !== "equals") {
      const firstNumber = Number(secondValue)
      const secondNumber = Number(displayValue)
      result = doOperation(currentOperation, firstNumber, secondNumber)
      setLastOperation(currentOperation)
      setSecondValue(displayValue)
      setCurrentOperation("equals")
    } else {
      const firstNumber = Number(displayValue)
      const secondNumber = Number(secondValue)
      result = doOperation(lastOperation, firstNumber, secondNumber)
    }

    setDisplayValue(toString(result))

  }

  function onMouseDown (e) {
    const currentClassName = e.target.className
    e.target.className = `${currentClassName} calculator__button_type_pressed`
  }

  function onMouseUp (e) {
    const currentClassName = e.target.className
    e.target.className = `${currentClassName.replace(/................................$/, '')}`
  }

  return (
    <div className="calculator">
      <div className="calculator__screen">
        <span className="calculator__screen-info">{displayValue}</span>
      </div>
      <div className="calculator__buttons">
        <button onClick={resetDisplayValue} name="AC" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>AC</button>
        <button onClick={plusOrMinus} name="plus or minus" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀅺</button>
        <button onClick={percentOperation} name="percent" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀘾</button>
        <button onClick={operationSymbol} name="division" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀅿</button>
        <button onClick={changeDisplayValue} name="7" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>7</button>
        <button onClick={changeDisplayValue} name="8" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>8</button>
        <button onClick={changeDisplayValue} name="9" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>9</button>
        <button onClick={operationSymbol} name="multiplication" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀅾</button>
        <button onClick={changeDisplayValue} name="4" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>4</button>
        <button onClick={changeDisplayValue} name="5" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>5</button>
        <button onClick={changeDisplayValue} name="6" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>6</button>
        <button onClick={operationSymbol} name="subtraction" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀅽</button>
        <button onClick={changeDisplayValue} name="1" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>1</button>
        <button onClick={changeDisplayValue} name="2" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>2</button>
        <button onClick={changeDisplayValue} name="3" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>3</button>
        <button onClick={operationSymbol} name="addition" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀅼</button>
        <button onClick={changeDisplayValue} name="0" className="calculator__button calculator__button_type_zero" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>0</button>
        <button onClick={changeDisplayValue} name="." className="calculator__button" type="button"  onMouseDown={onMouseDown}onMouseUp={onMouseUp}>,</button>
        <button onClick={equalsOperation} name="equals" className="calculator__button calculator__button_type_equals" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀆀</button>
      </div>
    </div>
  );
}

export default Calculator;
