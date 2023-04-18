
const result = ({text, ...neco}) => (
    <div>
        <p>Hádej {text}{neco.accent}</p>
    </div>
);
export default result;

export const Result2 = () => (
    <div>
        <p>Hádej uhodl jsi!</p>
    </div>
);

    
