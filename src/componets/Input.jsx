import { useState } from 'react';

export const Input = ({getInputNumber}) => {
    const [inputNumber, setInputNumber] = useState(0)
    const btn = getInputNumber !== undefined ? 
      <button onClick={()=>getInputNumber(inputNumber)}>Check</button> : <span>Error</span>
    return <>
        <input type='number' 
            onKeyUp={(e) => {if (e.key === "Enter") { getInputNumber(Number(e.target.value)) }}}
            onInput={(e) => setInputNumber(Number(e.target.value))} />
        &nbsp;{btn}
    </>
}
 
export default Input;
