import React, {useState} from "react";
import Counter from "./Counter";

function Counters() {
    const [counters, setCounters] = useState([<Counter/>]);

    const plusCounter = () => {
        setCounters([...counters, <Counter/>])
    };

    return (
        <div>
            {counters}
            <button onClick={plusCounter}> Add counter</button>
        </div>
    );
}

export default Counters;