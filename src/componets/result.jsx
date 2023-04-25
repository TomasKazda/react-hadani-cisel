const result = ({cnt, ...neco}) => (
    <div>
        <p>Hádej po {cnt}.{neco.accent}</p>
    </div>
);
export default result;

export const Result2 = ({cnt, number}) => (
    <div>
        <p>Uhodl jsi číslo <b>{number}</b> na <b>{cnt}</b> pokus!</p>
    </div>
);

export const CompareTo = ({hidden, number}) => {
   let text = undefined;
   if (hidden > number) text = "Hádej víc"
   else if (hidden < number) text = "Hádej méně"
   
   return <>
      {text !== undefined ? <div>{text}</div> : ""}
   </>   
}

    
