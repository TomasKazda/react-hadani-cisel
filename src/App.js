import './App.css';
import { useEffect, useState } from 'react';
import TextOutput, {Result2 as Done} from "./componets/result"

function App() {
  const [hidden, setHidden] = useState(0)

  useEffect(() => {
    setHidden(Math.round(Math.random() * 100))
  }, []);

  let compare = "méně";
  return (
    <div className="App">
       <TextOutput text={hidden} accent="!"></TextOutput>
       <Done/>
    </div>
  );
}

export default App;
