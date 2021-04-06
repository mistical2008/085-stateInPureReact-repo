import React, {useEffect, useState} from 'react';
import {getFromLocalStorage, setToLocalStorage} from '../utils/local-storage';
import styles from './Counter.module.css';

// type Props = {
// min: number,
// max: number,
// step: number,
// }

const Counter = ({min, max, step}: {min: any, max: any, step: any}) => {
  const [count, setCount] = useState(getFromLocalStorage());

  const increment = () => {
    setCount((count) => {
      if (count >= max) return count;
      return count + step;
    })
  }

  const decrement = () => {
    setCount((count) => {
      if (count <= min) return count;
      return count - step;
    })
  }

  const reset = () => {
    setCount(0);
  }

  useEffect(() => {
    setToLocalStorage({count})
  }, [count])

  return (
    <div className={styles.wrapper}>
      <p className={styles.counterValue}>{count}</p>
      <p>
        <button onClick={decrement} className={styles.button}>➖ Decrement</button>
        <button onClick={reset} className={styles.button}>Reset 🔃</button>
        <button onClick={increment} className={styles.button}>Increment ➕</button>
      </p>
    </div>
  )
}

export default Counter
