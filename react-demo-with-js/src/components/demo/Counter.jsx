import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0);
    const [incDecBy, setIncDecBy] = useState(1);

    function incrementCounter() {
        setCounter(counter + 1);
    }

    function decrementCounter() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    const incrementDecrementCounter = (event) => {
        setIncDecBy(event.target.value);
    }

    function incrementByCounter() {
        setCounter(counter + Number(incDecBy));
    }

    function decrementByCounter() {
        if (!isNaN(incDecBy) && counter - Number(incDecBy) >= 0) {
            setCounter(counter - Number(incDecBy));
        }
    }

    return (
        <>
            <div>
                <h2>Counter: {counter}</h2>
                <div className="d-flex gap-2">
                    <button className="btn btn-primary" onClick={() => incrementCounter()}>Increment</button>
                    <button className="btn btn-secondary" onClick={decrementCounter}>Decrement</button>
                </div>
            </div>
            <hr />
            <div>
                <h2>Increment Counter by user input value</h2>
                <div className="row g-4 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="counter">Enter counter value</label>
                    </div>
                    <div className="col-auto">
                        <input value={incDecBy} onChange={(e) => incrementDecrementCounter(e)} type="number" id="counter" className="form-control" />
                    </div>
                    <div className="col-auto">
                        <span>Counter: {counter}</span>
                    </div>
                    <div className="col-auto d-flex gap-2">
                        <button className="btn btn-success" onClick={() => incrementByCounter()}>Increment</button>
                        <button className="btn btn-info" onClick={() => decrementByCounter()}>Decrement</button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Counter