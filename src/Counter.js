import React, {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const minus = () => {
        setCount(count -1);
    };

    const plus = () => {
        setCount(count +1);
    };

    const [counter, setCounter] = useState([1, 2, 3, 4]);

    return (
        <div>
            <button onClick={minus}> - </button>
            {count}
            <button onClick={plus}> + </button>

        </div>
    );
}

export default Counter;