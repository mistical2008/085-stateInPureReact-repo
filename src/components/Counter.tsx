import React, {useState} from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1)
  }

  const decrement = () => {
    setCount((count) => count - 1)
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.counterValue}>{count}</p>
      <p>
        <button onClick={decrement} className={styles.button}>➖ Decrement</button>
        <button onClick={reset} className={styles.button}>Reset🔃</button>
        <button onClick={increment} className={styles.button}>Increment ➕</button>
      </p>
    </div>
  )
}

export default Counter
