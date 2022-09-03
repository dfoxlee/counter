const CounterWrapper = ({count, setCount}) => {

    const handleDecrementClick = () => {
        count-=1;
        setCount(count);
    }

    const handleIncrementClick = () => {
        count+=1;
        setCount(count);
    }

    const handleReset = () => {
        count=0;
        setCount(count);
    }

    return(
        <div>
            <div className="upper-counter-wrapper">
                <button className="decrement" onClick={handleDecrementClick}>-</button>
                <h2 className="counter-value">{count}</h2>
                <button className="increment" onClick={handleIncrementClick}>+</button>
            </div>
            <div className="lower-counter-wrapper">
                <button className="reset" onClick={handleReset}>reset</button>
            </div>
        </div>
    )
}

export default CounterWrapper;