//Counter2.jsx
import { useContext } from "react";
import AppContext from "./Contexts/AppContext";

const Counter2 = () => {
    const { count, incrementCount } = useContext(AppContext);
    return (
    <div>
      <h1>Counter 2 </h1>
      <p>Count*2: {count*2}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
    );
};

export default Counter2;