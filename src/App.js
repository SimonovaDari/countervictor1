import React, {useState} from 'react';

function App() {

    const [count, setCount] = useState(5);

const minus = () => {
    setCount(count -1);
console.log('MINUS', count)
};

    const plus = () => {
        setCount(count +1);
        console.log('PLUS', count)
    };

    const [counter, setCounter] = useState([1, 2, 3, 4]);
const dobavSchetchik()
    const counter = props.el;
    const buttonPlusHandler = () => {
        props.counterPlus(props.index);
    }
  return (
    <div>
      <button onClick={minus}>-</button>
        {count}
      <button onClick={plus}>+</button>
        <button onClick={dobavSchetchik}>+ Schetchik</button>
    </div>
  );
}

export default App;
