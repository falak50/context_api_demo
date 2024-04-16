import { AppProvider } from "./Contexts/AppContext";
import Counter from "./Counter";
import Counter2 from "./Counter2";

function App() {
  return (
    <AppProvider>
      <Counter />
      <Counter2 />
    </AppProvider>
  );
}

export default App;
