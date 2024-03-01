import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T | undefined>();

  const setValue = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const ls = window.localStorage.getItem(key);

    if (ls) {
      try {
        const parsed = JSON.parse(ls) as T;
        setStoredValue(parsed);
      } catch (error) {
        console.log(error);
        setStoredValue(initialValue);
      }
    } else {
      setStoredValue(initialValue);
    }
  }, []);

  useEffect(() => {
    if (storedValue) {
      setValue(storedValue);
    }
  }, [storedValue]);

  return [storedValue as T, setStoredValue] as const;
};
