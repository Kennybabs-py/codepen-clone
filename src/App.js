import "./App.css";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};
export default App;

//   getting our value
//   const [storedValue, setStoredValue] = useState(() => {
//     const jsonValue = localStorage.getItem(prefixedKey);
//     return jsonValue ? JSON.parse(jsonValue) : initialValue;
//   });

//   //   setting our value
//   const setValue = (value) => {
//     try {
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       window.localStorage.setItem(prefixedKey, JSON.stringify(valueToStore));
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return [storedValue, setValue];
