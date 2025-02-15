import { useState } from "react";

type Props = {
    counterHistory: number[];
    setCounterHistory: (counterHistory: number[]) => void;

}

export default function Form({counterHistory, setCounterHistory}: Props) {
    const [inputValue, setInputValue] = useState<number>(0);
    const [inputValue2, setInputValue2] = useState<number>(0);
    const [operand, setOperand] = useState<string>("+");
    const [count, setCount] = useState<number>(0)
  const [moddedCount, setModdedCount] = useState<number>(0);
    
  const handleClick = (inputValue: number, inputValue2: number, operand: string) => {

    // setCount((count) => count + (Math.random() * 10 - 5).toFixed(0) % 2)

    //the value did not change until next render so if console.log then it will show the old value.
    // setCount(count => count + 1)
    
    
    switch(operand){
      case "+":
        setCount(inputValue + inputValue2);
        handleClickMod3(inputValue + inputValue2);
        setCounterHistory([...counterHistory, inputValue + inputValue2]);
        break;
      case "-":
        setCount(inputValue - inputValue2);
        handleClickMod3(inputValue - inputValue2);
        setCounterHistory([...counterHistory, inputValue - inputValue2]);
        break;
      case "*":
        setCount(inputValue * inputValue2);
        handleClickMod3(inputValue * inputValue2);
        setCounterHistory([...counterHistory, inputValue * inputValue2]);
        break;
      case "/":
        setCount(inputValue / inputValue2);
        handleClickMod3(inputValue / inputValue2);
        setCounterHistory([...counterHistory, inputValue / inputValue2]);
        break;
      default:
        return "Invalid operand"
    }
    
    
  }

  
  const handleClickMod3 = (newValue: number) => {
    setModdedCount(newValue % 3)
  }
  
  return (
    <>
    <input type = "text" onChange = {(e) => {
        if (!isNaN(parseInt(e.target.value))) {
          setInputValue(parseInt(e.target.value))
        }
        }}
       defaultValue={inputValue}
       aria-label="input1"
       name="input1"
        ></input>
        <select onChange = {(e) => {
          const newOperand = e.target.value;
          setOperand(newOperand);
          handleClick(inputValue, inputValue2, newOperand);
        }}
        defaultValue={operand}
        //define for testing
        aria-label="operand"
        >
          <option value = "+">+</option>
          <option value = "-">-</option>
          <option value = "*">*</option>
          <option value = "/">/</option>
        </select>
        <input type = "text" onChange = {(e) => {
        if (!isNaN(parseInt(e.target.value))) {
          setInputValue2(parseInt(e.target.value))
        }
        
        }}
        defaultValue = {inputValue2}
        //define for testing
        aria-label="input2"
        name="input2"
        ></input>
      <button onClick={() => handleClick(inputValue, inputValue2, operand)}>
      count is {count}
      </button>
        <button onClick={() => handleClickMod3(count)}>
        count mod3 is {moddedCount}
        </button>
    </>
  )
}