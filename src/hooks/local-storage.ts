import {useEffect, useState} from "react";

export const useLocalStorage = (initialState: number, key: string, optionalCallback?: (value: any) => void) => {
  function get(): number {
    const storage = localStorage.getItem(key);
    console.log(localStorage, storage);

    if (!storage) return initialState;
    const parsedValue = JSON.parse(storage).value
    return parsedValue;
  }
  const initial = get()
  const [value, setValue] = useState<number>(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({value}));

    if (optionalCallback) optionalCallback(value)
    /* eslint-disable  react-hooks/exhaustive-deps */
  }, [value])

  return [value, setValue] as const;
};

