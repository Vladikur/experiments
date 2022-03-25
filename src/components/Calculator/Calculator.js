import React, { useState }  from 'react';

function Calculator() {

  const [displayValue, setDisplayValue] = useState('0')
  const [firstNumber, setFirstNumber] = useState(0)
  const [newNumber, setNewNumber] = useState(false)
  const [division, setDivision] = useState(false)
  const [multiplication, setMultiplication] = useState(false)
  const [subtraction, setSubtraction] = useState(false)
  const [addition, setAddition] = useState(false)

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

  console.log(newNumber)

  function resetDisplayValue () {
    setDisplayValue("0")
    setFirstNumber(0)
    setNewNumber(false)
    setDivision(false)
    setMultiplication(false)
    setSubtraction(false)
    setAddition(false)
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

  function onMouseDown (e) {
    const currentClassName = e.target.className
    e.target.className = `${currentClassName} calculator__button_type_pressed`
  }

  function onMouseUp (e) {
    const currentClassName = e.target.className
    e.target.className = `${currentClassName.replace(/................................$/, '')}`
  }

  function divisionOperation (e) {
    setDivision(true)
    setNewNumber(true)
    setMultiplication(false)
    setSubtraction(false)
    setAddition(false)
    setFirstNumber(Number(displayValue))
  }

  function multiplicationOperation (e) {
    setDivision(false)
    setNewNumber(true)
    setMultiplication(true)
    setSubtraction(false)
    setAddition(false)
    setFirstNumber(Number(displayValue))
  }

  function additionOperation (e) {
    setDivision(false)
    setNewNumber(true)
    setMultiplication(false)
    setSubtraction(false)
    setAddition(true)
    setFirstNumber(Number(displayValue))
  }

  function subtractionOperation (e) {
    setDivision(false)
    setNewNumber(true)
    setMultiplication(false)
    setSubtraction(true)
    setAddition(false)
    setFirstNumber(Number(displayValue))
  }

  function percentOperation (e) {
    if (firstNumber !== 0) {
      const displayNumber = Number(displayValue)
      const hundredPercent = firstNumber
      const result = (hundredPercent / 100) * displayNumber
      setDisplayValue(result)
    }
  }

  function equalsOperation () {
    let secondNumber = Number(displayValue)
    let result 
    if (division) {
      result = firstNumber / secondNumber
    }
    if (multiplication) {
      result = firstNumber * secondNumber
    }
    if (addition) {
      result = firstNumber + secondNumber
    }
    if (subtraction) {
      result = firstNumber - secondNumber
    }
    setDisplayValue(result)
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
        <button onClick={divisionOperation} name="division" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀅿</button>
        <button onClick={changeDisplayValue} name="7" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>7</button>
        <button onClick={changeDisplayValue} name="8" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>8</button>
        <button onClick={changeDisplayValue} name="9" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>9</button>
        <button onClick={multiplicationOperation} name="multiplication" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀅾</button>
        <button onClick={changeDisplayValue} name="4" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>4</button>
        <button onClick={changeDisplayValue} name="5" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>5</button>
        <button onClick={changeDisplayValue} name="6" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>6</button>
        <button onClick={subtractionOperation} name="subtraction" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀅽</button>
        <button onClick={changeDisplayValue} name="1" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>1</button>
        <button onClick={changeDisplayValue} name="2" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>2</button>
        <button onClick={changeDisplayValue} name="3" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>3</button>
        <button onClick={additionOperation} name="addition" className="calculator__button" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀅼</button>
        <button onClick={changeDisplayValue} name="0" className="calculator__button calculator__button_type_zero" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>0</button>
        <button onClick={changeDisplayValue} name="." className="calculator__button" type="button"  onMouseDown={onMouseDown}onMouseUp={onMouseUp}>,</button>
        <button onClick={equalsOperation} name="equals" className="calculator__button calculator__button_type_equals" type="button" onMouseDown={onMouseDown}onMouseUp={onMouseUp}>􀆀</button>
      </div>
    </div>
  );
}

export default Calculator;
