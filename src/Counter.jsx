//counter.jsx
import  { useContext } from 'react';
import AppContext from './Contexts/AppContext';

function Counter() {
  const { count, incrementCount } = useContext(AppContext);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
export default Counter;