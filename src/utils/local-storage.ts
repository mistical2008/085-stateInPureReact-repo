type CounterState = {
  count: number
}

const COUNTER_STATE = "counterState";

export function getFromLocalStorage(): number {
  const storage = localStorage.getItem(COUNTER_STATE);
  if (!storage) return 0;
  return JSON.parse(storage).count;
}

export function setToLocalStorage(state: CounterState): void {
  localStorage.setItem(COUNTER_STATE, JSON.stringify(state));
}
