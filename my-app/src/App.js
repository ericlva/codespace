import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  fetch("www.ctrip.com")
  return (
    <div className="App">
      <header className="App-header">
        <p>codespaces demo</p>
        <button type="button" onClick={() =>{
          setCount((count) => count + 1)
        }}>
          count is: {count}
        </button>
      </header>
    </div>
  );
}

export default App;
