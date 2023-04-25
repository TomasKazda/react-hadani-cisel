import './App.css';
import { useEffect, useState } from 'react';
import TextOutput, {CompareTo, Result2 as Done} from "./componets/result"
import Input from './componets/Input'

function App() {
  const [inputNumber, setInputNumber] = useState(0)
  const [hidden, setHidden] = useState(0)
  const [cnt, setCnt] = useState(1)

  useEffect(() => {
    setHidden(Math.round(Math.random() * 100))
  }, []);
  
  const btnClick = (number) => {
    if (hidden !== number) {
      setCnt((c) => c + 1)
    }
    setInputNumber(number)
  }

  return (
    <div className="App">
      <TextOutput cnt={cnt} accent="!"></TextOutput>
      <Input getInputNumber={btnClick} />  
      {(inputNumber === hidden) ? <Done number={inputNumber} cnt={cnt} /> 
        : <CompareTo hidden={hidden} number={inputNumber} /> }
    </div>
  );
}

export default App;
