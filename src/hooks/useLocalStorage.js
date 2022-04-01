import { useState, useEffect } from "react";

const PREFIX = "codepen-clone-";
const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;

  //   getting our value
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  //   setting our value
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
    console.log(value);
  }, [prefixedKey, value]);

  return [value, setValue];
};
export default useLocalStorage;
