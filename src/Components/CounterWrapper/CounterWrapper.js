import "./CounterWrapper.css"

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
        <div className="counter-container">
            <div className="counter-wrapper">
                <div className="upper-counter">
                    <button className="increment" onClick={handleIncrementClick}>+</button>     
                    <h2 className="counter-value">{count}</h2>
                    <button className="decrement" onClick={handleDecrementClick}>-</button>
                </div>
                <div className="lower-counter">
                    <button className="reset" onClick={handleReset}>reset</button> 
                </div>   
            </div>
        </div>
    )
}

export default CounterWrapper;