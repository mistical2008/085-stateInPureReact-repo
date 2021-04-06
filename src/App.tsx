import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="wrapper">
      <Counter min={-20} max={30} step={5} />
    </div>
  );
}

export default App;
