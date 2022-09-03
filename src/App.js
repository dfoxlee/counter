import React, {useState} from "react";
import CounterWrapper from "./Components/CounterWrapper/CounterWrapper";
import Header from "./Components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <CounterWrapper count={count} setCount={setCount} />
    </div>
  );
}

export default App;
