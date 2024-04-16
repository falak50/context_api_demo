import { createContext, useState } from 'react';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <AppContext.Provider value={{ count, incrementCount }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
