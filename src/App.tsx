import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="wrapper">
      <Counter min={-10} max={10} step={5} />
    </div>
  );
}

export default App;
