import { useState } from "react";
const PlusminusInputCounter = ({ min = 0, max = Number.MAX_SAFE_INTEGER, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    if (counter < max) {
      setCounter((counter) => counter + 1);
    }
  };

  const reduce = () => {
    if (counter > min) {
      setCounter((counter) => counter - 1);
    }
  };
  return (
    <div className="d-flex">
      <button className="btn btn-link px-2" onClick={add}>
        <i className="bi bi-plus"></i>
      </button>
      <input
        type="number"
        value={counter}
        onInput={(e) => setCounter(Number(e.target.value))}
        className="form-control form-control-sm"
      />

      <button className="btn btn-link px-2" onClick={reduce}>
        <i className="bi bi-dash"></i>
      </button>
    </div>
  );
};
export default PlusminusInputCounter;
