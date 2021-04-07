import {useLocalStorage} from '../hooks/local-storage';
import {isNumInRange} from '../utils/validation';
// import {getFromLocalStorage, setToLocalStorage} from '../utils/local-storage';
import styles from './Counter.module.css';

// type Props = {
// min: number,
// max: number,
// step: number,
// }

const Counter = ({min, max, step}: {min: any, max: any, step: any}) => {
  // const [count, setCount] = useState(getFromLocalStorage());
  const numFromRange = (num: number): void => {
    if (isNumInRange(num, {min, max})) return;
  }
  const [count, setCount] = useLocalStorage(0, "counterState", numFromRange);

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

  // useEffect(() => {
  // setToLocalStorage({count})
  // }, [count])

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
